/**
 * Tipagem das propriedades do componente EmailTextarea.
 *
 * @property {string} value - Valor atual do textarea.
 * @property {(event: React.ChangeEvent<HTMLTextAreaElement>) => void} onChange - Função chamada ao alterar o conteúdo do textarea.
 */
type EmailTextareaProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

/**
 * EmailTextarea Component
 *
 * Campo de texto do tipo textarea para inserção do conteúdo de um email.
 * Possui estilo customizado, altura fixa e não permite redimensionamento.
 *
 * ▸ **Responsabilidade**
 * - Exibir área de texto controlada para input de email
 * - Permitir atualização do valor via onChange
 *
 * @param {EmailTextareaProps} props Propriedades para controlar o textarea
 * @param {string} props.value Valor atual do textarea
 * @param {(event: React.ChangeEvent<HTMLTextAreaElement>) => void} props.onChange Função para tratar mudanças no conteúdo
 *
 * @returns {JSX.Element} Componente visual do campo textarea para email
 *
 * @example
 * ```tsx
 * <EmailTextarea value={email} onChange={(e) => setEmail(e.target.value)} />
 * ```
 */
export default function EmailTextarea({ value, onChange }: EmailTextareaProps) {
  return (
    <textarea
      name="email"
      placeholder="Insira o email aqui..."
      value={value}
      onChange={onChange}
      className="w-full h-52 border border-primary rounded-2xl p-4 resize-none"
    />
  );
}
