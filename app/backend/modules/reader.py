from pdfminer.high_level import extract_text
from pathlib import Path

class Reader:
    """
    Classe responsável por ler e extrair texto de diferentes fontes.

    Suporta:
    - Texto bruto diretamente fornecido como string
    - Arquivos `.pdf` (usando pdfminer)
    - Arquivos `.txt` (codificação UTF-8)
    """

    def __init__(self):
        """
        Inicializa uma instância da classe Reader.
        """
        pass

    def read(self, source: str, is_raw_text: bool = False) -> str:
        """
        Lê e retorna o conteúdo textual de uma fonte.

        Args:
            source (str): Caminho para o arquivo (.pdf ou .txt) ou texto bruto.
            is_raw_text (bool): Se True, interpreta `source` como texto puro ao invés de caminho de arquivo.

        Returns:
            str: Texto extraído ou limpo da fonte especificada.

        Raises:
            FileNotFoundError: Se o caminho especificado não existir.
            ValueError: Se o formato do arquivo não for suportado (.pdf ou .txt).
        """
        # Caso seja texto bruto diretamente passado
        if is_raw_text:
            return source.strip()

        # Verifica se o caminho existe
        path = Path(source)
        if not path.exists():
            raise FileNotFoundError(f"Arquivo {source} não encontrado.")

        # Lê PDF ou TXT dependendo da extensão
        if path.suffix.lower() == ".pdf":
            text = extract_text(str(path))
        elif path.suffix.lower() == ".txt":
            text = path.read_text(encoding="utf-8", errors="ignore")
        else:
            raise ValueError("Formato de arquivo não suportado. Use .pdf ou .txt")

        # Remove espaços extras nas bordas
        return text.strip()
