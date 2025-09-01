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
          >
            Vitor Oliveira
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
