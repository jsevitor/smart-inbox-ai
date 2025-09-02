import CopyButton from "../common/CopyButton";

/**
 * Tipagem das propriedades do componente ResponseSuggestion.
 *
 * @property {string} text - Texto da sugestão de resposta
 */
type ResponseSuggestionProps = {
  text: string;
};

/**
 * ResponseSuggestion Component
 *
 * Componente responsável por exibir uma sugestão de resposta para um email classificado.
 * Exibe o texto da sugestão com opção de copiar para a área de transferência.
 *
 * ▸ **Responsabilidade**
 * - Apresentar o texto da sugestão de resposta
 * - Permitir ao usuário copiar facilmente o texto sugerido
 *
 * @param {ResponseSuggestionProps} props Propriedades do componente
 * @param {string} props.text Texto da sugestão de resposta a ser exibida
 *
 * @returns {JSX.Element} Componente visual com sugestão de resposta
 *
 * @example
 * ```tsx
 * <ResponseSuggestion text="Obrigado pelo seu contato, vamos analisar e responder em breve." />
 * ```
 */
export default function ResponseSuggestion({ text }: ResponseSuggestionProps) {
  return (
    <div className="border border-primary rounded-2xl p-4 flex flex-col gap-2 bg-surface w-full">
      <div className="flex items-center justify-between border-b border-primary pb-1">
        <div className="flex items-center gap-2">
          <i className="bi bi-question-circle"></i>
          <h3 className="text-lg text-primary font-bold">
            Sugestão de Resposta
          </h3>
        </div>
        <CopyButton text={text} />
      </div>
      <div className="py-2">
        <p>{text}</p>
      </div>
    </div>
  );
}
