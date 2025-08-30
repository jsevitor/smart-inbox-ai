type HeadingProps = {
  heading: string;
};

export default function Heading({ heading }: HeadingProps) {
  return (
    <div className="border-b border-surface w-full ">
      <h1 className="text-2xl font-extrabold text-primary">{heading}</h1>
    </div>
  );
}
