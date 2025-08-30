from fastapi import FastAPI
from modules.classifier import EmailClassifier

clf = EmailClassifier()

app = FastAPI(
    title="Classificador de Emails",
    description="API para classificação automática de emails e geração de respostas",
    version="1.0.0",
)

@app.get("/")
def read_root():
    # Texto de exemplo e testes
    text = "Gostaria de saber como faço para atualizar meus dados bancários."
    # text = "Oferta imperdível de colchões nas lojas ponei. "
    result = clf.classify(text)
    return {"result": result}

@app.post("/classify")
def classify_email(email_text: str):
    result = clf.classify(email_text)
    return {"result": result}

@app.get("/response")
def generate_response():
    return {"message": "Gerando resposta... (ainda não implementado)"}
