type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2 items-center pt-8">
      <h1 className="text-2xl lg:text-4xl font-extrabold text-primary uppercase">
        {title}
      </h1>
      <h2 className="text-sm lg:text-lg font-medium italic text-text-secondary text-center w-3/4 lg:w-full">
        {subtitle}
      </h2>
    </div>
  );
}
