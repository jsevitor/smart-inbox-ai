type ResponseSuggestionProps = {
  text: string;
};

export default function ResponseSuggestion({ text }: ResponseSuggestionProps) {
  return (
    <div className="border border-primary rounded-2xl p-4 flex flex-col gap-2 bg-surface">
      <div className="flex items-center gap-2 border-b border-primary pb-1">
        <i className="bi bi-question-circle"></i>
        <h3 className="text-lg text-primary font-bold">
          Sugestão de Resposta Automática
        </h3>
      </div>
      <div className="py-2">
        <p>{text}</p>
      </div>
    </div>
  );
}
