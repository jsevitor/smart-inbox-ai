import { useState } from "react";

/**
 * Tipagem das propriedades do componente CopyButton.
 *
 * @property {string} text - Texto que será copiado para a área de transferência ao clicar no botão.
 */
type CopyButtonProps = {
  text: string;
};

/**
 * CopyButton Component
 *
 * Botão que permite copiar um texto para a área de transferência.
 * Exibe um ícone diferente enquanto o texto está copiado (por 2 segundos).
 *
 * ▸ **Responsabilidade**
 * - Copiar texto para o clipboard ao ser clicado
 * - Exibir feedback visual (ícone de sucesso) durante 2 segundos após a cópia
 *
 * @param {CopyButtonProps} props Propriedades para personalizar o botão de cópia
 * @param {string} props.text Texto que será copiado para a área de transferência
 *
 * @returns {JSX.Element} Componente visual do botão de cópia
 *
 * @example
 * ```tsx
 * <CopyButton text="Conteúdo para copiar" />
 * ```
 */
export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  /**
   * Função chamada quando o botão de cópia é clicado.
   *
   * - Copia o texto para a área de transferência
   * - Altera o estado `copied` para `true` por 2 segundos
   * - Volta o estado `copied` para `false` após 2 segundos
   */
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} className="flex items-center gap-2">
      {copied ? (
        <>
          <i className="bi bi-check-circle text-success" />
        </>
      ) : (
        <>
          <i className="bi bi-copy text-primary" />
        </>
      )}
    </button>
  );
}
