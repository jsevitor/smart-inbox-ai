## Contexto do Projeto

Empresas do setor financeiro lidam diariamente com um alto volume de emails, muitos dos quais exigem atenção imediata (ex.: solicitações de status, envio de documentos), enquanto outros são improdutivos (ex.: mensagens de felicitação). Atualmente, esse trabalho é feito manualmente, consumindo tempo e reduzindo a produtividade da equipe.

## Objetivo

Criar uma aplicação web simples que utilize técnicas de Inteligência Artificial para:

1. **Classificar** emails em duas categorias: **Produtivo** ou **Improdutivo**.
2. **Sugerir respostas automáticas** de acordo com a categoria identificada.

## Escopo do Projeto

### MVP (entregável principal)

- Upload de arquivos `.txt` e `.pdf` ou inserção de texto manual.
- Classificação dos emails em **Produtivo** ou **Improdutivo**.
- Exibição de uma **resposta sugerida** para o email classificado.

### Funcionalidades Futuras (se houver tempo)

- Subcategorias de intenção (status de solicitação, envio de anexo, felicitações).
- Medidor de confiança do modelo de IA.
- Opção de copiar resposta para a área de transferência.
- Histórico dos emails processados.

## Arquitetura da Solução

Fluxo planejado:

Usuário → Interface Web (upload/entrada de texto)
→ Backend Python (API REST)
→ NLP (pré-processamento + classificação zero-shot)
→ Motor de Resposta (templates baseados em categoria/intenção)
← Resultado: Categoria + Resposta sugerida

## Estrutura Inicial do Repositório

    /app
      /backend      # Código backend (API, NLP, lógica de resposta)
      /frontend     # Interface web (Next.js)
    /docs
    README.md
    requirements.txt

## 🚀 Próximos Passos

- [x] Implementar interface inicial em HTML para upload de arquivos/texto.
- [ ] Criar backend em Python com endpoint de teste.
- [ ] Integrar modelo de classificação zero-shot.
- [ ] Definir e aplicar templates de resposta.
- [ ] Realizar deploy em nuvem (Render ou Hugging Face Spaces).
- [ ] Gravar vídeo de demonstração.

---
