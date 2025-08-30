type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2 items-center pt-8">
      <h1 className="text-4xl font-extrabold text-primary uppercase">
        {title}
      </h1>
      <h2 className="text-lg font-medium italic text-text-secondary">
        {subtitle}
      </h2>
    </div>
  );
}
