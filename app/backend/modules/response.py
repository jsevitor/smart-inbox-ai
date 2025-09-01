import json
import re
import os
from dotenv import load_dotenv
from google import genai
from google.genai import types
from modules.preprocess import SpacyPreprocessor

load_dotenv()
API_KEY = os.getenv("GOOGLE_GENAI_API_KEY")

class AutomatedResponse:
    def __init__(self, language="pt"):
        if not API_KEY:
            raise ValueError("Chave da API não encontrada no .env")
        self.client = genai.Client(api_key=API_KEY)
        self.preprocessor = SpacyPreprocessor(language=language)

    def generate_reply(self, text: str, category: str):
        clean_text = self.preprocessor.preprocess(text)
        category_lower = category.lower()

        # Prompt diferente para cada categoria
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

            Exemplo de saída:
            {{
            "resposta": "Olá, agradeço o contato, mas não desejo receber mais emails. Por favor, remova meu endereço da lista de envio."
            }}
            """

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

            Exemplo de saída:
            {{
            "resposta": "Olá, agradeço o retorno positivo sobre minha inscrição. Estou animado com a possibilidade de participar do processo seletivo e fico à disposição para fornecer informações adicionais, caso necessário. Atenciosamente, [Nome da Pessoa]."
            }}
            """

        else:
            # fallback caso a categoria seja desconhecida
            prompt = f"""
            Texto do email: "{clean_text}"
            Categoria: "{category}"

            Instruções:
            - Gere uma resposta simples e clara.
            - Retorne SOMENTE um JSON com a chave "resposta".
            """

        response = self.client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
            config=types.GenerateContentConfig(
                thinking_config=types.ThinkingConfig(thinking_budget=0)
            ),
        )

        # remove ```json ... ``` caso exista
        cleaned_text = re.sub(r"^```json\s*|\s*```$", "", response.text.strip(), flags=re.IGNORECASE)

        try:
            resultado = json.loads(cleaned_text)
        except (json.JSONDecodeError, ValueError, TypeError):
            resultado = {"resposta": ""}  # fallback caso modelo não retorne JSON válido

        return resultado
