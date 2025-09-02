/**
 * Tipagem das propriedades do componente SectionHeader.
 *
 * @property {string} title - Título principal da seção.
 * @property {string} subtitle - Subtítulo descritivo da seção.
 */
type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

/**
 * SectionHeader Component
 *
 * Componente responsável por exibir o cabeçalho de uma seção, contendo título e subtítulo estilizados.
 *
 * ▸ **Responsabilidade**
 * - Apresentar título em destaque com estilo uppercase
 * - Exibir subtítulo com estilo itálico e centralizado
 *
 * @param {SectionHeaderProps} props Propriedades para personalizar o cabeçalho da seção
 * @param {string} props.title Título principal da seção
 * @param {string} props.subtitle Subtítulo descritivo da seção
 *
 * @returns {JSX.Element} Componente visual do cabeçalho da seção
 *
 * @example
 * ```tsx
 * <SectionHeader
 *   title="Título da Seção"
 *   subtitle="Descrição breve da seção."
 * />
 * ```
 */
export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2 items-center pt-8">
      <h1 className="text-2xl lg:text-4xl font-extrabold text-primary uppercase">
        {title}
      </h1>
      <h2 className="text-sm lg:text-lg font-medium italic text-text-secondary text-center w-3/4 lg:w-full">
        {subtitle}
      </h2>
    </div>
  );
}
