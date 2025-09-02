/**
 * Tipagem das propriedades do componente OptionToggle.
 *
 * @property {Array<{ value: string; label: string; icon: string }>} options - Lista de opções disponíveis.
 * @property {string} selected - Valor da opção atualmente selecionada.
 * @property {(value: string) => void} onChange - Função chamada ao selecionar uma opção.
 */
type OptionToggleProps = {
  options: {
    value: string;
    label: string;
    icon: string;
  }[];
  selected: string;
  onChange: (value: string) => void;
};

/**
 * OptionToggle Component
 *
 * Componente que exibe um grupo de botões para alternar entre várias opções.
 * Aplica estilos diferenciados para a opção selecionada e permite trocar a seleção via clique.
 *
 * ▸ **Responsabilidade**
 * - Renderizar opções como botões estilizados
 * - Indicar visualmente a opção selecionada
 * - Notificar mudança de seleção ao componente pai
 *
 * @param {OptionToggleProps} props Propriedades para controlar o toggle de opções
 * @param {Array<{ value: string; label: string; icon: string }>} props.options Lista de opções disponíveis
 * @param {string} props.selected Valor da opção selecionada atualmente
 * @param {(value: string) => void} props.onChange Função chamada ao selecionar uma nova opção
 *
 * @returns {JSX.Element} Componente visual do toggle de opções
 *
 * @example
 * ```tsx
 * <OptionToggle
 *   options={[
 *     { value: 'day', label: 'Day', icon: 'bi bi-sun' },
 *     { value: 'night', label: 'Night', icon: 'bi bi-moon' },
 *   ]}
 *   selected="day"
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 */
export default function OptionToggle({
  options,
  selected,
  onChange,
}: OptionToggleProps) {
  return (
    <div className="flex justify-between border border-surface rounded-xl overflow-hidden w-full font-bold text-text-secondary">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`flex justify-center items-center gap-2 flex-1 lg:w-1/2 p-2 text-sm lg:text-base
            ${
              selected === opt.value
                ? "bg-primary text-white"
                : "hover:bg-primary-hover hover:text-white"
            }`}
        >
          <i className={opt.icon}></i>
          {opt.label}
        </button>
      ))}
    </div>
  );
}
