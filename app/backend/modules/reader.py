from pdfminer.high_level import extract_text
from pathlib import Path

class Reader:
    def __init__(self):
        pass

    def read(self, source: str, is_raw_text: bool = False) -> str:
        """
        Aceita tanto texto direto quanto caminho de arquivo (.pdf ou .txt)
        """
        if is_raw_text:
            return source.strip()

        path = Path(source)
        if not path.exists():
            raise FileNotFoundError(f"Arquivo {source} não encontrado.")

        if path.suffix.lower() == ".pdf":
            text = extract_text(str(path))
        elif path.suffix.lower() == ".txt":
            text = path.read_text(encoding="utf-8", errors="ignore")
        else:
            raise ValueError("Formato de arquivo não suportado. Use .pdf ou .txt")

        return text.strip()
