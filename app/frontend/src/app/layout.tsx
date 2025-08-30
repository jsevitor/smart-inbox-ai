import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
});

export const metadata: Metadata = {
  title: "SMART INBOX AI",
  description:
    "Analise e classifição automatizada de emails com Inteligência Artificial.chore: limpa projeto Next.js e define variáveis de cores e fontes",
};

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
