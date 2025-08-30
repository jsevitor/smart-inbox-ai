type PrimaryButtonProps = {
  children: React.ReactNode;
};

export default function PrimaryButton({
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className="flex justify-center gap-2 w-1/2 rounded-full bg-primary hover:bg-primary-hover text-white p-2"
    >
      {children}
    </button>
  );
}
