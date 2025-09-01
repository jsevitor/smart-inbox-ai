import json
import re
import os
from dotenv import load_dotenv
from google import genai
from google.genai import types
from modules.preprocess import SpacyPreprocessor

# Carrega as variáveis de ambiente (.env)
load_dotenv()
API_KEY = os.getenv("GOOGLE_GENAI_API_KEY")


class AutomatedResponse:
    """
    Classe responsável por gerar respostas automáticas a e-mails com base na categoria do conteúdo.

    Utiliza pré-processamento linguístico (spaCy) e modelos da Google (Gemini) para gerar
    respostas apropriadas para e-mails classificados como 'Produtivo', 'Improdutivo' ou outros.
    """

    def __init__(self, language: str = "pt"):
        """
        Inicializa a instância de AutomatedResponse.

        Args:
            language (str): Idioma usado no pré-processamento (padrão: 'pt').

        Raises:
            ValueError: Se a chave da API (GOOGLE_GENAI_API_KEY) não for encontrada no .env.
        """
        if not API_KEY:
            raise ValueError("Chave da API não encontrada no .env")
        self.client = genai.Client(api_key=API_KEY)
        self.preprocessor = SpacyPreprocessor(language=language)

    def generate_reply(self, text: str, category: str) -> dict:
        """
        Gera uma resposta automática com base no conteúdo do e-mail e sua categoria.

        O prompt enviado ao modelo varia conforme a categoria:
        - 'Produtivo': Resposta cordial e profissional.
        - 'Improdutivo': Resposta breve e assertiva (ou recusa educada).
        - Outras: Resposta genérica.

        Args:
            text (str): Texto do e-mail recebido.
            category (str): Categoria atribuída ao e-mail ('Produtivo', 'Improdutivo', etc.).

        Returns:
            dict: Dicionário no formato:
                {
                    "resposta": "Texto gerado pelo modelo"
                }

            Se o modelo não retornar um JSON válido, retorna:
                {
                    "resposta": ""
                }
        """
        clean_text = self.preprocessor.preprocess(text)
        category_lower = category.lower()

        # Prompt específico para categoria "improdutivo"
        if category_lower == "improdutivo":
            prompt = f"""
            Texto do email: "{clean_text}"
            Categoria: "Improdutivo"

            Instruções:
            - Gere uma resposta curta e assertiva.
            - A resposta deve ser **direcionada ao remetente do email**.
            - Se o email for marketing ou spam, peça educadamente para não enviar mais mensagens.
            - Estruture em formato de email profissional: saudação, corpo da mensagem e fechamento adequado.
            - Retorne SOMENTE um JSON com a chave "resposta".
            - Não inclua texto extra fora do JSON.
            """

        # Prompt para categoria "produtivo"
        elif category_lower == "produtivo":
            prompt = f"""
            Você recebeu o seguinte email:

            "{clean_text}"

            Categoria: "Produtivo"

            Instruções para gerar a resposta:
            - Escreva a resposta como se fosse enviada pelo destinatário original (a pessoa que recebeu esse email).
            - Direcione a mensagem ao remetente do email recebido.
            - Não repita nem parafraseie o conteúdo do email recebido.
            - Seja cordial, claro e objetivo.
            - Estruture em formato de email profissional: saudação, corpo da mensagem e fechamento adequado.
            - Ao final da resposta, inclua a seguinte frase: "Atenciosamente, [Nome da Pessoa]". Não coloque o nome de usuario na resposta.
            - Retorne SOMENTE um JSON com a chave "resposta".
            """

        # Prompt genérico para categorias desconhecidas
        else:
            prompt = f"""
            Texto do email: "{clean_text}"
            Categoria: "{category}"

            Instruções:
            - Gere uma resposta simples e clara.
            - Retorne SOMENTE um JSON com a chave "resposta".
            """

        # Chamada à API do Gemini
        response = self.client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
            config=types.GenerateContentConfig(
                thinking_config=types.ThinkingConfig(thinking_budget=0)
            ),
        )

        # Remove possíveis blocos markdown ```json ... ```
        cleaned_text = re.sub(r"^```json\s*|\s*```$", "", response.text.strip(), flags=re.IGNORECASE)

        try:
            result = json.loads(cleaned_text)
        except (json.JSONDecodeError, ValueError, TypeError):
            # Se falhar, retorna resposta vazia
            result = {"resposta": ""}
    
        return result
