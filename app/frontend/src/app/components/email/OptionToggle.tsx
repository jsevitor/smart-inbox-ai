type OptionToggleProps = {
  options: {
    value: string;
    label: string;
    icon: string;
  }[];
  selected: string;
  onChange: (value: string) => void;
};

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
          className={`flex justify-center gap-2 w-1/2 p-2 
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
