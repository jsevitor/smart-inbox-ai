import { useState } from "react";

type FileUploadProps = {
  onFileSelect: (file: File) => void;
};

export default function FileUpload({ onFileSelect }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={handleChange}
      />
      <label
        htmlFor="file-upload"
        className={`flex flex-col items-center justify-center w-full h-52 border-2 border-dashed rounded-2xl cursor-pointer hover:bg-gray-50 transition ${
          selectedFile ? "border-success" : "border-primary"
        }`}
      >
        <i
          className={`bi text-3xl ${
            selectedFile
              ? "bi-file-earmark-check text-success"
              : "bi-upload text-text-secondary"
          }`}
        ></i>
        <span className="mt-2 text-sm text-gray-500">
          {selectedFile ? selectedFile.name : "Clique para escolher"}
        </span>
      </label>
    </div>
  );
}
