import json
import re
import os
from dotenv import load_dotenv
from google import genai
from google.genai import types
from app.backend.modules.preprocess import SpacyPreprocessor

# Carrega variáveis de ambiente do arquivo .env
load_dotenv()
API_KEY = os.getenv("GOOGLE_GENAI_API_KEY")


class EmailClassifier:
    """
    Classe responsável por classificar e-mails como 'Produtivo' ou 'Improdutivo'
    utilizando o modelo Gemini da Google.

    Attributes:
        client (genai.Client): Cliente para interagir com a API do Gemini.
        preprocessor (SpacyPreprocessor): Instância do pré-processador de texto usando spaCy.
    """

    def __init__(self, language: str = "pt"):
        """
        Inicializa o classificador de e-mails com um pré-processador linguístico.

        Args:
            language (str): Idioma para o pré-processamento (padrão: "pt").

        Raises:
            ValueError: Se a chave da API não estiver definida no .env.
        """
        if not API_KEY:
            raise ValueError("Chave da API não encontrada no .env")

        self.client = genai.Client(api_key=API_KEY)
        self.preprocessor = SpacyPreprocessor(language=language)

    def classify(self, text: str) -> dict:
        """
        Classifica um texto de e-mail como 'Produtivo' ou 'Improdutivo'.

        Pré-processa o texto, envia-o para o modelo Gemini e interpreta a resposta JSON.

        Args:
            text (str): Texto do e-mail a ser classificado.

        Returns:
            dict: Dicionário com as chaves:
                - "categoria" (str): 'Produtivo' ou 'Improdutivo'.
                - "confianca" (float): Valor entre 0 e 1 indicando confiança do modelo.
                Retorna {"categoria": None, "confianca": None} em caso de erro.
        """
        # Aplica o pré-processamento com spaCy
        clean_text = self.preprocessor.preprocess(text)

        # Prompt para o modelo Gemini
        prompt = f"""
        Analise o texto a seguir retirado de um email. 
        Classifique-o em categorias: 'Produtivo' ou 'Improdutivo'. 
        Retorne SOMENTE um JSON com a chave "categoria" e "confianca" (valor entre 0 e 1).
        Não adicione texto extra.
        Texto: "{clean_text}"
        """

        # Chamada ao modelo Gemini com configuração de pensamento
        response = self.client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
            config=types.GenerateContentConfig(
                thinking_config=types.ThinkingConfig(thinking_budget=0)
            ),
        )

        # Remove possíveis blocos de markdown como ```json ... ```
        cleaned_text = re.sub(r"^```json\s*|\s*```$", "", response.text.strip(), flags=re.IGNORECASE)

        try:
            result = json.loads(cleaned_text)

            # Garante que "confianca" seja float entre 0 e 1
            if "confianca" in result:
                result["confianca"] = float(result["confianca"])

        except (json.JSONDecodeError, ValueError, TypeError):
            # Em caso de erro, retorna estrutura padrão com None
            result = {"categoria": None, "confianca": None}

        return result
