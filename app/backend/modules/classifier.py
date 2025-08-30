from transformers import pipeline
from modules.preprocess import SpacyPreprocessor  # supondo que salve em preprocess_spacy.py

class EmailClassifier:
    def __init__(self, model_name="facebook/bart-large-mnli", language="pt"):
        self.labels = ["Produtivo", "Improdutivo"]
        self.classifier = pipeline(
            "zero-shot-classification",
            model=model_name,
            tokenizer=model_name
        )
        self.preprocessor = SpacyPreprocessor(language=language)

    def classify(self, text: str):
        # pré-processa o texto antes de classificar
        clean_text = self.preprocessor.preprocess(text)

        result = self.classifier(clean_text, candidate_labels=self.labels)
        return {
            "texto_original": text,
            "texto_preprocessado": clean_text,
            "categoria": result["labels"][0],
            "confianca": result["scores"][0]
        }
