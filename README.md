# Smart Inbox AI

Uma aplicação web que utiliza **Inteligência Artificial** para
classificar emails e sugerir respostas automáticas, ajudando equipes a
focarem no que realmente importa.

## Contexto

Empresas do setor financeiro recebem diariamente um grande volume de
emails, desde solicitações urgentes até mensagens sem valor produtivo.
Esse processo manual consome tempo e reduz a eficiência da equipe.

O **Smart Inbox AI** resolve esse problema ao automatizar a análise de
emails com técnicas de NLP, classificando-os como **Produtivos** ou
**Improdutivos** e sugerindo respostas adequadas.

## Objetivo

- **Classificar** emails em duas categorias: Produtivo ou
  Improdutivo.
- **Gerar respostas sugeridas** automaticamente, de acordo com a
  categoria.

## Preview

Acesse o projeto em: https://smart-inbox-ai-xi.vercel.app/

## Screenshot

<img width="1350" height="768" alt="smart-inbox-ai" src="https://github.com/user-attachments/assets/20ca2919-0d97-46d9-a3e1-5b8ad72cea54" />

## Escopo

### MVP

- Upload de arquivos `.txt` e `.pdf` ou entrada de texto manual.
- Classificação de emails em **Produtivo** ou **Improdutivo**.
- Sugestão de resposta automática.

## Arquitetura

Fluxo da aplicação:

    Usuário → Interface Web (Next.js)
            → Backend Python (FastAPI)
            → NLP (classificação zero-shot + templates de resposta)
            ← Resultado: Categoria + Resposta sugerida (Gemini API)

## Deploy

- **Frontend:** Vercel (escala automática, otimizado para apps React/Next.js)

- **Backend:** Render (infra simples para containers e APIs Python)

## Estrutura do Repositório

    /app
      /backend   # API em Python (FastAPI + NLP + Gemini API)
      /frontend  # Interface web (Next.js)
     /docs       # Documentação gerada (Sphinx + Typedoc)
    README.md
    requirements.txt

## Tecnologias Utilizadas

- **Frontend:** Next.js, React, TypeScript
- **Backend:** Python, FastAPI
- **IA/NLP:** Hugging Face Transformers (zero-shot classification), Google Gemini API

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é apenas para fins de avaliação técnica.

## Contato

Caso queira entrar em contato, me encontre em:

- LinkedIn: [linkedin.com/in/josevitoroliveira](https://linkedin.com/in/josevitoroliveira)
- E-mail: [vitorjseo@gmail.com](mailto:vitorjseo@gmail.com)

---

Desenvolvido por **Vitor Oliveira**.
