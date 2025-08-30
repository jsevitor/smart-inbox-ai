type CardProps = {
  children: React.ReactNode;
  className?: string;
};
export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow flex flex-col p-8 2xl:px-64 ${className}`}
    >
      {children}
    </div>
  );
}
