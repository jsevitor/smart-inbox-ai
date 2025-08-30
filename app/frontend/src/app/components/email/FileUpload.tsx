type FileUploadProps = {
  onFileSelect: (file: File) => void;
};

export default function FileUpload({ onFileSelect }: FileUploadProps) {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            onFileSelect(file);
          }
        }}
      />
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full h-52 border-2 border-dashed border-primary rounded-2xl cursor-pointer hover:bg-gray-50 transition"
      >
        <i className="bi bi-upload text-3xl text-text-secondary"></i>
        <span className="mt-2 text-sm text-gray-500">
          Clique para escolher ou arraste um arquivo
        </span>
      </label>
    </div>
  );
}
