import AddProductCore from "@/components/admin/add-product-core";
import { Tutorial } from "@/components/admin/ui";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Icon,
  PageHeader,
  PageHeaderWrapper,
  PageTitle,
} from "@/components/ui";
import { AlertCircle } from "lucide-react";

// const specificProperties = [
//   { name: "Nome" },
//   { name: "Marca", options: "" },
//   { name: "Cor principal", options: "" },
//   { name: "Diferencial", options: "" },
//   { name: "Idade da criança", options: "", type: "number" },
//   { name: "Padrão de aparência secundário", options: "" },
//   { name: "Preço", type: "number" },
//   { name: "Descrição" },
// ];

const tutorialSteps = [
  "Adicione as fotos.",
  "Defina o gênero.",
  "Caso queira, defina uma roupa base, se houver.",
  "Defina as informações básicas.",
  "Defina as informações especificas.",
  "Confira todas as informações e depois clique em 'Salvar' para concluir o cadastro.",
];

const page = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderWrapper>
          <PageTitle className="md:px-0 md:max-w-3xl lg:max-w-4xl">
            Cadastrar Produtos
          </PageTitle>
        </PageHeaderWrapper>
      </PageHeader>
      <div
        className={`max-w-3xl lg:max-w-4xl mx-auto space-y-6 mt-3 px-3 sm:px-4`}
      >
        <Tutorial
          title="como cadastrar"
          steps={tutorialSteps}
          cssList={`sm:flex-row sm:gap-4`}
          itemCss="sm:mb-2"
          pb={24}
        />
        <Alert className="bg-light-bg border">
          <Icon Svg={AlertCircle} />
          <AlertTitle>Importante</AlertTitle>
          <AlertDescription>
            Registre um tipo de peça de cada vez. Por exemplo: primeiro as
            camisetas básicas lisas, depois as camisas polos, e assim por
            diante. Isso facilita o cadastro e evita confusão.
          </AlertDescription>
        </Alert>
        <AddProductCore />
      </div>
    </>
  );
};

export default page;
