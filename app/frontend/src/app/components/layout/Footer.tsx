/**
 * Footer Component
 *
 * Componente responsável por renderizar o rodapé da aplicação.
 * Exibe informações de direitos autorais e crédito ao desenvolvedor.
 *
 * ▸ **Responsabilidade**
 * - Mostrar copyright e direitos reservados
 * - Incluir link para o perfil do desenvolvedor
 *
 * @returns {JSX.Element} Componente visual do rodapé
 *
 * @example
 * ```tsx
 * <Footer />
 * ```
 */
export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 my-4 md:px-0 flex flex-col justify-center text-text-secondary text-xs mt-16">
        <p className="text-center text-accent-green">© 2025 SMART INBOX AI.</p>
        <p className="text-center">Todos os direitos reservados.</p>
        <p className="text-center">
          Desenvolvido por{" "}
          <a
            href="https://github.com/jsevitor"
            target="_blank"
            className="underline text-primary hover:text-primary-hover"
            rel="noopener noreferrer"
          >
            Vitor Oliveira
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
