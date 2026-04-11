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

const tutorialSteps = [
  "Adicione as fotos.",
  'Defina as informações básicas (veja as "roupas comuns" para mais informações)',
  "Defina as informações especificas.",
  "Confira todas as informações e depois clique em 'Salvar' para concluir o cadastro.",
  "Se houverem roupas parecidas, adicione a quantidade e clique em enfileirar produtos",
  "Clique em salvar para concluir o cadastro do produto",
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
        <Alert className="bg-light-bg border mb-4" variant={"destructive"}>
          <Icon Svg={AlertCircle} size="h6" strokeWidth="medium" />
          <AlertTitle>
            <h6>Importante</h6>
          </AlertTitle>
          <AlertDescription>
            Registre um tipo de peça de cada vez. Por exemplo: primeiro as
            camisetas básicas lisas, depois as camisas polos, e assim por
            diante. Isso facilita o cadastro e evita confusão.
          </AlertDescription>
        </Alert>
        <Tutorial title="como cadastrar" steps={tutorialSteps} />
        <AddProductCore />
      </div>
    </>
  );
};

export default page;
