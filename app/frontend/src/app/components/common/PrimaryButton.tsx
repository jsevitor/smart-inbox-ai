type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
};

export default function PrimaryButton({
  children,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center gap-2 w-1/2 rounded-full bg-primary hover:bg-primary-hover text-white p-2"
    >
      {children}
    </button>
  );
}
