type EmailTextareaProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

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
