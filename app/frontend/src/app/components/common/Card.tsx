type CardProps = {
  children: React.ReactNode;
  className?: string;
};
export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow flex flex-col p-4 lg:p-8 2xl:px-18 ${className}`}
    >
      {children}
    </div>
  );
}
