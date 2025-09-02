import { useState } from "react";
import Card from "../common/Card";
import OptionToggle from "../email/OptionToggle";
import EmailTextarea from "../email/EmailTextarea";
import PrimaryButton from "../common/PrimaryButton";
import FileUpload from "../email/FileUpload";
import SectionHeader from "../common/SectionHeader";
import Heading from "../common/Heading";
import ResultadoTag from "../response/ResultadoTag";
import ResponseSuggestion from "../response/ResponseSuggestion";
import { PropagateLoader } from "react-spinners";

/**
 * Tipagem das propriedades do componente Main.
 *
 * @typedef {object} ClassificationResult
 * @property {object} resultado Dados da classificação do texto.
 * @property {string} resultado.texto_original Texto original enviado para classificação.
 * @property {string} resultado.texto_preprocessado Texto preprocessado utilizado pela API.
 * @property {string} resultado.categoria Categoria atribuída ao texto (ex: produtivo, improdutivo).
 * @property {number} resultado.confianca Nível de confiança da classificação, valor numérico.
 * @property {object} resposta_sugerida Resposta sugerida para o email classificado.
 * @property {string} resposta_sugerida.resposta Texto da resposta sugerida.
 */
interface ClassificationResult {
  resultado: {
    texto_original: string;
    texto_preprocessado: string;
    categoria: string;
    confianca: number;
  };
  resposta_sugerida: {
    resposta: string;
  };
}

/**
 * Main Component
 *
 * Componente principal que permite ao usuário classificar emails
 * via upload de arquivo ou inserção direta de texto.
 * Mostra o resultado da classificação com sugestão de resposta.
 *
 * ▸ **Responsabilidade**
 * - Gerenciar estado do input de texto ou arquivo selecionado
 * - Controlar o modo de entrada (arquivo ou texto)
 * - Chamar a API para classificação conforme a opção selecionada
 * - Exibir indicador de carregamento durante processamento
 * - Apresentar resultados da classificação e sugestões ao usuário
 *
 * @returns {JSX.Element} Componente visual principal da página de classificação
 *
 * @example
 * ```tsx
 * <Main />
 * ```
 */
export default function Main() {
  const [selectedOption, setSelectedOption] = useState("file");
  const [textInput, setTextInput] = useState("");
  const [fileInput, setFileInput] = useState<File | null>(null);
  const [result, setResult] = useState<ClassificationResult | null>(null);
  const [loading, setLoading] = useState(false);

  const options = [
    { value: "file", label: "Upload de Arquivo", icon: "bi bi-upload" },
    { value: "text", label: "Insira o Texto", icon: "bi bi-file-earmark-text" },
  ];

  const handleClassify = async () => {
    setLoading(true);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      if (selectedOption === "text") {
        const response = await fetch(`${API_URL}/classify-text`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: textInput }),
        });
        const data = await response.json();
        setResult(data);
      } else if (selectedOption === "file") {
        if (!fileInput) {
          alert("Selecione um arquivo primeiro!");
          return;
        }
        const formData = new FormData();
        formData.append("file", fileInput);

        const response = await fetch(`${API_URL}/classify-file`, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        setResult(data);
      }
    } catch (err) {
      console.error(err);
      setResult(null);
    } finally {
      setLoading(false);
      setTextInput("");
      setFileInput(null);
    }
  };

  return (
    <main className="lg:w-[1024px] mx-auto px-4 flex flex-col gap-4">
      <SectionHeader
        title="Classificador de Emails"
        subtitle="Emails organizados, respostas automáticas, equipe liberada."
      />

      <Card className="items-center gap-8">
        <OptionToggle
          options={options}
          selected={selectedOption}
          onChange={setSelectedOption}
        />

        <p className="text-xs lg:text-sm font-medium italic text-text-secondary text-center mt-[-1rem]">
          Escolha a opção para classificar por meio de um arquivo ou insira o
          texto.
        </p>

        {selectedOption === "file" ? (
          <FileUpload onFileSelect={setFileInput} />
        ) : (
          <EmailTextarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        )}

        <PrimaryButton onClick={handleClassify}>
          {loading ? "Processando..." : "Classificar"}
        </PrimaryButton>
      </Card>

      {loading ? (
        <div className="flex justify-center p-4 mb-4">
          <PropagateLoader color="#063456" size={20} />
        </div>
      ) : (
        result && (
          <Card className="items-start gap-4">
            <Heading heading="Resultado da Classificação" />
            <ResultadoTag
              category={
                result.resultado.categoria.toLowerCase() === "produtivo"
                  ? "produtivo"
                  : "improdutivo"
              }
            />
            <ResponseSuggestion text={result.resposta_sugerida?.resposta} />
          </Card>
        )
      )}
    </main>
  );
}
