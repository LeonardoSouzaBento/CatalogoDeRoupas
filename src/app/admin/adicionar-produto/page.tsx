import { AlertInfo, TitlePage } from "@/app/loja/_ui";
import ProductBasesList from "./_components/ProductBaseList/ProductBasesList";
import GenderButtons from "./_components/GenderButtons";
import BaseGenerator from "./_components/BaseGenerator/BaseGenerator";
import Tutorial from "../_ui/Tutorial";
import FinalInformations from "./_components/FinaIInformations/FinalInformations";
import Photos from "./_components/Photos/Photos";
import Result from "./_components/Result/Result";

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

const css = { wrapper: `px-3 pb-6 bg-gray-50` };

const page = () => {
  return (
    <>
      <TitlePage
        title="Cadastrar Produtos"
        styles="md:px-0 md:max-w-3xl lg:max-w-4xl"
      />
      <div className={`${css.wrapper}`}>
        <AlertInfo
          styles="bs bg-transparent shadow-soft br-lg p-5 max-w-3xl lg:max-w-4xl m-auto"
          text={`Registre um tipo de peça de cada vez. Por exemplo: primeiro as camisetas básicas lisas, 
              depois as camisas polos, e assim por diante. Isso facilita o cadastro e evita confusão.`}
        />
        <Tutorial
          title="como cadastrar um produto"
          steps={[
            "Defina o gênero.               ",
            "Se quiser, defina a roupa base.",
            "Defina as informações básicas.",
            "Defina as informações especificas.",
            "Adicione as fotos.",
            "Clique em 'Salvar' para concluir o cadastro.",
          ]}
          listStyles={`sm:flex-row sm:gap-4`}
          itemStyles="sm:mb-2"
        />

        <GenderButtons />
        <ProductBasesList />
        <BaseGenerator />
        <FinalInformations />
        <Photos />
        <Result />
      </div>
    </>
  );
};

export default page;
