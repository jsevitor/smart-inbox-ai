/**
 * Tipagem das propriedades do componente PrimaryButton.
 *
 * @property {React.ReactNode} children - Conteúdo interno do botão (texto, ícones, etc).
 * @property {() => void | Promise<void>} [onClick] - Função chamada ao clicar no botão, pode ser assíncrona.
 */
type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
};

/**
 * PrimaryButton Component
 *
 * Botão estilizado principal para ações primárias, com estilo customizado e suporte a clique.
 *
 * ▸ **Responsabilidade**
 * - Renderizar botão com estilo primário consistente
 * - Permitir conteúdo interno dinâmico via `children`
 * - Aceitar função de clique síncrona ou assíncrona
 *
 * @param {PrimaryButtonProps} props Propriedades para personalizar o botão
 * @param {React.ReactNode} props.children Conteúdo interno do botão
 * @param {() => void | Promise<void>} [props.onClick] Função executada ao clicar no botão
 *
 * @returns {JSX.Element} Componente visual do botão primário
 *
 * @example
 * ```tsx
 * <PrimaryButton onClick={() => alert('Clicado!')}>
 *   Enviar
 * </PrimaryButton>
 * ```
 */
export default function PrimaryButton({
  children,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center gap-2 w-1/2 rounded-full bg-primary hover:bg-primary-hover text-white p-2"
    >
      {children}
    </button>
  );
}
