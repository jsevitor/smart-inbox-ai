/**
 * Tipagem das propriedades do componente ResultadoTag.
 *
 * @property {string} category - Categoria do resultado
 */
type ResultadoTagProps = {
  category: "produtivo" | "improdutivo";
};

/**
 * ResultadoTag Component
 *
 * Componente visual que exibe uma tag indicativa da categoria da classificação,
 * destacando se o resultado é "produtivo" ou "improdutivo".
 *
 * ▸ **Responsabilidade**
 * - Mostrar visualmente a categoria da classificação com cores e ícones distintos
 *
 * @param {ResultadoTagProps} props Propriedades do componente
 * @param {"produtivo" | "improdutivo"} props.category Categoria do resultado
 *
 * @returns {JSX.Element} Tag visual com a categoria
 *
 * @example
 * ```tsx
 * <ResultadoTag category="produtivo" />
 * ```
 */
export default function ResultadoTag({ category }: ResultadoTagProps) {
  const isProdutivo = category === "produtivo";

  return (
    <div
      className={`rounded-full px-4 py-1 flex gap-2 items-center text-white ${
        isProdutivo ? "bg-success" : "bg-error"
      }`}
    >
      <i className={`bi ${isProdutivo ? "bi-check-circle" : "bi-x-circle"}`} />
      {isProdutivo ? "Produtivo" : "Improdutivo"}
    </div>
  );
}
