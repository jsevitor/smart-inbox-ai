import spacy

class SpacyPreprocessor:
    def __init__(self, language="en"):
        if language == "en":
            self.nlp = spacy.load("en_core_web_sm")
        elif language == "pt":
            self.nlp = spacy.load("pt_core_news_sm")
        else:
            raise ValueError("Idioma não suportado. Use 'en' ou 'pt'.")

    def preprocess(self, text: str, remove_stopwords=True, use_lemmatization=True) -> str:
        doc = self.nlp(text.lower())
        
        tokens = []
        for token in doc:
            
            if remove_stopwords and token.is_stop:
                continue
            if token.is_punct or token.is_space:
                continue

            if use_lemmatization:
                tokens.append(token.lemma_)  
            else:
                tokens.append(token.text) 

        return " ".join(tokens)
