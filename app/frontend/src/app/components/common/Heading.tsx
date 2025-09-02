/**
 * Tipagem das propriedades do componente Heading.
 *
 * @property {string} heading - Texto a ser exibido como título principal.
 */
type HeadingProps = {
  heading: string;
};

/**
 * Heading Component
 *
 * Componente responsável por exibir um título principal estilizado com borda inferior.
 *
 * ▸ **Responsabilidade**
 * - Exibir texto de título principal
 * - Aplicar estilo de borda inferior e destaque no texto
 *
 * @param {HeadingProps} props Propriedades para personalizar o título
 * @param {string} props.heading Texto do título a ser exibido
 *
 * @returns {JSX.Element} Componente visual do título principal
 *
 * @example
 * ```tsx
 * <Heading heading="Título da Página" />
 * ```
 */
export default function Heading({ heading }: HeadingProps) {
  return (
    <div className="border-b border-surface w-full ">
      <h1 className="text-2xl font-extrabold text-primary">{heading}</h1>
    </div>
  );
}
