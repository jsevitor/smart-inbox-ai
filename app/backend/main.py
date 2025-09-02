from fastapi import FastAPI, UploadFile, File
from modules.classifier import EmailClassifier
from modules.reader import Reader
from modules.response import AutomatedResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import tempfile

# Origem permitida para CORS (ajustar para produção se necessário)
origins = [
    "http://localhost:3000",  
    "http://127.0.0.1:3000",
    "https://smart-inbox-ai-xi.vercel.app/",
]

class TextInput(BaseModel):
    """
    Modelo Pydantic para entrada de texto puro via JSON.
    """
    text: str

# Instância da aplicação FastAPI
app = FastAPI(
    title="Classificador de Emails",
    description="API para classificação automática de e-mails (texto, PDF, TXT) com sugestão de resposta",
    version="1.1.0",
)

# Middleware CORS para permitir comunicação com o frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Instâncias dos módulos usados
clf = EmailClassifier()
reader = Reader()
response = AutomatedResponse()


@app.post("/classify-file")
async def classify_file(file: UploadFile = File(...)):
    """
    Classifica o conteúdo de um arquivo enviado (.pdf ou .txt) e sugere uma resposta automática.

    Args:
        file (UploadFile): Arquivo de entrada (PDF ou TXT).

    Returns:
        dict: Dicionário com:
            - nome do arquivo,
            - categoria ('Produtivo' ou 'Improdutivo'),
            - confiança da classificação (0 a 1),
            - resposta sugerida baseada na categoria.
    """
    # Salva temporariamente o arquivo enviado
    with tempfile.NamedTemporaryFile(delete=False, suffix=file.filename) as tmp:
        tmp.write(await file.read())
        temp_path = tmp.name

    # Leitura, classificação e resposta
    text = reader.read(temp_path)
    classification = clf.classify(text)
    reply = response.generate_reply(text, classification["categoria"])

    return {
        "arquivo": file.filename,
        "resultado": classification,
        "resposta_sugerida": reply
    }


@app.post("/classify-text")
async def classify_text(input_data: TextInput):
    """
    Classifica um texto enviado diretamente e sugere uma resposta automática.

    Args:
        input_data (TextInput): Texto enviado via JSON.

    Returns:
        dict: Dicionário com:
            - categoria ('Produtivo' ou 'Improdutivo'),
            - confiança da classificação (0 a 1),
            - resposta sugerida baseada na categoria.
    """
    text = reader.read(input_data.text, is_raw_text=True)
    classification = clf.classify(text)
    reply = response.generate_reply(text, classification["categoria"])

    return {
        "resultado": classification,
        "resposta_sugerida": reply
    }
