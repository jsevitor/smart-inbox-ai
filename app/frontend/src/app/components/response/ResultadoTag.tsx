type ResultadoTagProps = {
  category: "produtivo" | "improdutivo";
};

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
