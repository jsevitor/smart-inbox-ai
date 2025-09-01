import spacy

class SpacyPreprocessor:
    """
    Classe para pré-processamento de texto utilizando spaCy.

    Esta classe aplica limpeza, remoção de stopwords, lematização e normalização em textos,
    suportando os idiomas inglês (`en`) e português (`pt`).

    Attributes:
        nlp (spacy.lang): Pipeline de linguagem carregada com spaCy.
    """

    def __init__(self, language: str = "en"):
        """
        Inicializa o pré-processador com o idioma desejado.

        Args:
            language (str): Código do idioma ('en' para inglês, 'pt' para português).
        
        Raises:
            ValueError: Se o idioma não for suportado ou o modelo spaCy não estiver instalado.
        """
        if language == "en":
            self.nlp = spacy.load("en_core_web_sm")
        elif language == "pt":
            self.nlp = spacy.load("pt_core_news_sm")
        else:
            raise ValueError("Idioma não suportado. Use 'en' ou 'pt'.")

    def preprocess(self, text: str, remove_stopwords: bool = True, use_lemmatization: bool = True) -> str:
        """
        Aplica pré-processamento no texto: normalização, remoção de stopwords e lematização.

        Args:
            text (str): Texto original a ser processado.
            remove_stopwords (bool): Se True, remove palavras irrelevantes (default: True).
            use_lemmatization (bool): Se True, aplica lematização em vez de manter a forma original (default: True).

        Returns:
            str: Texto processado, com tokens limpos e separados por espaço.
        """
        # Converte texto para minúsculas e processa com spaCy
        doc = self.nlp(text.lower())
        
        tokens = []

        for token in doc:
            # Remove stopwords, pontuação e espaços
            if remove_stopwords and token.is_stop:
                continue
            if token.is_punct or token.is_space:
                continue

            # Adiciona a forma lematizada ou original
            if use_lemmatization:
                tokens.append(token.lemma_)
            else:
                tokens.append(token.text)

        # Retorna texto final com tokens unidos por espaço
        return " ".join(tokens)
