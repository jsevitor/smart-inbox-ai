import { useState } from "react";

type CopyButtonProps = {
  text: string;
};

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} className="flex items-center gap-2">
      {copied ? (
        <>
          <i className="bi bi-check-circle text-success" />
        </>
      ) : (
        <>
          <i className="bi bi-copy text-primary" />
        </>
      )}
    </button>
  );
}
