import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

// Definição da fonte Red Hat Display
const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
});

/**
 * Metadata da aplicação
 *
 * Define informações básicas da página, como título e descrição,
 * que ajudam no SEO e no comportamento geral do app Next.js.
 */
export const metadata: Metadata = {
  title: "SMART INBOX AI",
  description:
    "Analise e classificação automatizada de emails com Inteligência Artificial.",
};

/**
 * RootLayout Component
 *
 * Componente de layout raiz da aplicação Next.js.
 * Define a estrutura HTML básica do app, incluindo:
 * - Elemento <html> com atributo de linguagem
 * - Inclusão da fonte Red Hat Display via variável CSS
 * - Inclusão de ícones Bootstrap via CDN
 * - Container para renderizar os filhos do layout (conteúdo da página)
 *
 * ▸ **Responsabilidade**
 * - Fornecer estrutura HTML global
 * - Aplicar estilos globais e fontes customizadas
 * - Incluir recursos externos (ícones)
 *
 * @param {Readonly<{children: React.ReactNode}>} props Propriedades com conteúdo filho
 * @returns {JSX.Element} Layout global do app
 *
 * @example
 * ```tsx
 * <RootLayout>
 *   <App />
 * </RootLayout>
 * ```
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
        />
      </head>
      <body className={`${redHatDisplay.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
