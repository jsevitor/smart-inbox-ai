# Frontend - Smart Inbox AI

Interface web do **Smart Inbox AI**, construída em **Next.js + React**.  
Aqui o usuário interage com os recursos de classificação de e-mails e geração de respostas inteligentes.

---

## Tecnologias

- [Next.js](https://nextjs.org/) (React + App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) para estilização
- [react-spinners](https://www.davidhu.io/react-spinners/) para loaders

---

## Instalação e uso

Na pasta `app/frontend`:

```bash
# instalar dependências
npm install

# rodar em desenvolvimento
npm run dev

# build de produção
npm run build

# servir build
npm start

# gerar documentação
npm run docs
```

A aplicação sobe em: http://localhost:3000

## Estrutura

    frontend/
    ├── src/
    │   ├── app/           # rotas e páginas
    │   ├── components/    # componentes reutilizáveis
    │   ├── lib/           # utilitários
    │   └── styles/        # estilos globais
    ├── public/            # arquivos estáticos
    └── ...

## Documentação

A documentação é gerada com TypeDoc.

```
# gerar documentação
npx typedoc
```

Os arquivos são exportados para:

```
app/docs/frontend
```
