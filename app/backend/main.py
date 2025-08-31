from fastapi import FastAPI, UploadFile, File
from modules.classifier import EmailClassifier
from modules.reader import Reader
from modules.response import AutomatedResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import tempfile

origins = [
    "http://localhost:3000",  # endereço do front-end
    "http://127.0.0.1:3000",
    # você pode adicionar domínios de produção aqui
]

class TextInput(BaseModel):
    text: str

app = FastAPI(
    title="Classificador de Emails",
    description="API para classificação automática de emails (texto, PDF, TXT) com sugestão de resposta",
    version="1.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # origens permitidas
    allow_credentials=True,
    allow_methods=["*"],     # permite GET, POST etc.
    allow_headers=["*"],     # permite qualquer header
)

clf = EmailClassifier()
reader = Reader()
responder = AutomatedResponse()

@app.post("/classify-file")
async def classify_file(file: UploadFile = File(...)):
    with tempfile.NamedTemporaryFile(delete=False, suffix=file.filename) as tmp:
        tmp.write(await file.read())
        temp_path = tmp.name

    text = reader.read(temp_path)
    classification = clf.classify(text)
    reply = responder.generate_reply(text, classification["categoria"])
    return {
        "arquivo": file.filename,
        "resultado": classification,
        "resposta_sugerida": reply
    }


@app.post("/classify-text")
async def classify_text(input_data: TextInput):
    text = reader.read(input_data.text, is_raw_text=True)
    classification = clf.classify(text)
    reply = responder.generate_reply(text, classification["categoria"])
    return {
        "resultado": classification,
        "resposta_sugerida": reply
    }
