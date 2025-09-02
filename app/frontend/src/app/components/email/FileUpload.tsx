import { useState } from "react";

/**
 * Tipagem das propriedades do componente FileUpload.
 *
 * @property {(file: File) => void} onFileSelect - Função chamada quando um arquivo é selecionado.
 */
type FileUploadProps = {
  onFileSelect: (file: File) => void;
};

/**
 * FileUpload Component
 *
 * Componente para upload de arquivo com área clicável estilizada.
 * Exibe nome do arquivo selecionado e altera o estilo da borda após seleção.
 *
 * ▸ **Responsabilidade**
 * - Permitir seleção de um único arquivo
 * - Informar arquivo selecionado ao componente pai via callback
 * - Fornecer feedback visual da seleção com ícone e mudança de borda
 *
 * @param {FileUploadProps} props Propriedades para controlar o upload de arquivo
 * @param {(file: File) => void} props.onFileSelect Função chamada ao selecionar um arquivo
 *
 * @returns {JSX.Element} Componente visual para upload de arquivo
 *
 * @example
 * ```tsx
 * <FileUpload onFileSelect={(file) => console.log(file.name)} />
 * ```
 */
export default function FileUpload({ onFileSelect }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  /**
   * Função chamada ao alterar o input de arquivo.
   * Obtém o arquivo selecionado e:
   * - Atualiza o estado `selectedFile` com o arquivo.
   * - Chama a função `onFileSelect` passando o arquivo como parâmetro.
   * @param {React.ChangeEvent<HTMLInputElement>} e Evento de mudan a do input.
   */
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
