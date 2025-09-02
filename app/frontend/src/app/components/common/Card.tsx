/**
 * Tipagem das propriedades do componente Card.
 *
 * @property {React.ReactNode} children - Conteúdo a ser renderizado dentro do card.
 * @property {string} [className] - Classe CSS opcional para customização do estilo.
 */
type CardProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Card Component
 *
 * Componente responsável por exibir um card estilizado.
 * Permite a inclusão de conteúdo dinâmico via `children`, além de poder personalizar sua classe CSS.
 *
 * ▸ **Responsabilidade**
 * - Exibir conteúdo dinâmico dentro de um card com aparência padronizada
 * - Permitir personalização de estilos via `className`
 *
 * @param {CardProps} props Propriedades para personalizar o card
 * @param {React.ReactNode} props.children Conteúdo a ser exibido dentro do card
 * @param {string} [props.className] Classe CSS adicional para customização
 *
 * @returns {JSX.Element} Componente visual do Card
 *
 * @example
 * ```tsx
 * <Card className="my-custom-class">
 *   <h1>Conteúdo do Card</h1>
 * </Card>
 * ```
 */
export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow flex flex-col p-4 lg:p-8 2xl:px-18 ${className}`}
    >
      {children}
    </div>
  );
}
