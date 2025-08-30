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

export default function Main() {
  const [selectedOption, setSelectedOption] = useState("file");

  const options = [
    {
      value: "file",
      label: "Upload de Arquivo",
      icon: "bi bi-upload",
    },
    {
      value: "text",
      label: "Insira o Texto",
      icon: "bi bi-file-earmark-text",
    },
  ];
  return (
    <main className="w-[1024px] mx-auto px-4  flex flex-col gap-4">
      <SectionHeader
        title="Classificador de Emails"
        subtitle="Emails organizados, respostas automáticas, equipe liberada."
      />

      <Card className="items-center  gap-8">
        <p className="text-sm font-medium italic text-text-secondary mb-[-1rem]">
          Escolha a opção para classificar por meio de um arquivo ou insira o
          texto.
        </p>
        <OptionToggle
          options={options}
          selected={selectedOption}
          onChange={setSelectedOption}
        />

        {selectedOption === "file" ? (
          <FileUpload onFileSelect={() => {}} />
        ) : (
          <EmailTextarea value="" onChange={() => {}} />
        )}

        <PrimaryButton>Classificar</PrimaryButton>
      </Card>

      <Card className="items-start gap-4 ">
        <Heading heading="Resultado da Classificação" />

        <ResultadoTag category="produtivo" />

        <ResponseSuggestion
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              libero tempore eum sint et perferendis voluptas! Sequi quibusdam
              culpa non asperiores, velit nesciunt id, consequuntur excepturi
              quo voluptas quos cum! Vel aut aperiam ullam harum accusamus illo,
              rerum expedita eos sit repudiandae eaque? Harum tenetur eos natus,
              cupiditate animi tempore, quaerat quod rem, fuga molestias soluta
              excepturi consequatur! Saepe, cum?"
        />
      </Card>
    </main>
  );
}
