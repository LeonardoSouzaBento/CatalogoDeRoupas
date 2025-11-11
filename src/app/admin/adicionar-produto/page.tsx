import { AlertInfo, TitlePage } from "@/app/loja/_ui";
import ProductBasesList from "./_components/ProductBaseList/ProductBasesList";
import GenderButtons from "./_components/GenderButtons";
import BaseGenerator from "./_components/BaseGenerator/BaseGenerator";
import Tutorial from "../_ui/Tutorial";

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

const page = () => {
  return (
    <>
      <TitlePage title="Cadastrar Produtos" />
      <div className="px-3 pb-6 bg-gray-50">
        <div className="mb-5">
          <AlertInfo
            styles="bs bg-neutral-100/50! br-lg p-4 max-w-192 m-auto"
            text={`Registre um tipo de peça de cada vez. Por exemplo: primeiro as camisetas básicas lisas, 
              depois as camisas polos, e assim por diante. Isso facilita o cadastro e evita confusão.`}
          />
        </div>
        <GenderButtons />
        <Tutorial
          title="como cadastrar um produto"
          steps={[
            "Clique em 'Novo Produto' no topo da página.",
            "Preencha o nome, preço e categoria.",
            "Adicione as fotos do produto.",
            "Clique em 'Salvar' para concluir o cadastro.",
          ]}
        />
        <ProductBasesList />
        <BaseGenerator />

      </div>
    </>
  );
};

export default page;
