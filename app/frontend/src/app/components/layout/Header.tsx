/**
 * Header Component
 *
 * Componente responsável por renderizar o cabeçalho da aplicação.
 * Exibe o nome da aplicação com estilo destacado.
 *
 * ▸ **Responsabilidade**
 * - Mostrar título principal da aplicação
 * - Aplicar estilos de fundo e sombra ao cabeçalho
 *
 * @returns {JSX.Element} Componente visual do cabeçalho
 *
 * @example
 * ```tsx
 * <Header />
 * ```
 */
export default function Header() {
  return (
    <header className="bg-primary shadow">
      <div className="lg:w-[1024px] mx-auto flex items-center h-16 px-4">
        <h1 className="text-2xl text-surface font-extrabold">SMART INBOX AI</h1>
      </div>
    </header>
  );
}
