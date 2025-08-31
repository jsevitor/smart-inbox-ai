import json
import re
import os
from dotenv import load_dotenv
from google import genai
from google.genai import types
from modules.preprocess import SpacyPreprocessor

load_dotenv()
API_KEY = os.getenv("GOOGLE_GENAI_API_KEY")

class EmailClassifier:
    def __init__(self, language="pt"):
        if not API_KEY:
            raise ValueError("Chave da API não encontrada no .env")
        self.client = genai.Client(api_key=API_KEY)
        self.preprocessor = SpacyPreprocessor(language=language)

    def classify(self, text: str):
        clean_text = self.preprocessor.preprocess(text)

        prompt = f"""
        Analise o texto a seguir retirado de um email. 
        Classifique-o em categorias: 'Produtivo' ou 'Improdutivo'. 
        Retorne SOMENTE um JSON com a chave "categoria" e "confianca" (valor entre 0 e 1).
        Não adicione texto extra.
        Texto: "{clean_text}"
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
            # garante que confianca seja float entre 0 e 1
            if "confianca" in resultado:
                resultado["confianca"] = float(resultado["confianca"])
        except (json.JSONDecodeError, ValueError, TypeError):
            resultado = {"categoria": None, "confianca": None}

        return resultado
