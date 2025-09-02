"use client";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

/**
 * Home Component
 *
 * Componente raiz da aplicação que compõe o layout principal,
 * incluindo o cabeçalho, o conteúdo principal e o rodapé.
 *
 * ▸ **Responsabilidade**
 * - Renderizar o Header, Main e Footer em ordem
 * - Organizar a estrutura básica da página principal
 *
 * @returns {JSX.Element} Estrutura principal da aplicação
 *
 * @example
 * ```tsx
 * <Home />
 * ```
 */
export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
