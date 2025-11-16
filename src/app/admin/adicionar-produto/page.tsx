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
        <Tutorial
          title="como cadastrar um produto"
          steps={[
            "Adicione as fotos.",
            "Defina o gênero.",
            "Caso queira, defina uma roupa base, se houver.",
            "Defina as informações básicas.",
            "Defina as informações especificas.",
            "Confira todas as informações e depois clique em 'Salvar' para concluir o cadastro.",
          ]}
          listStyles={`sm:flex-row sm:gap-4`}
          itemStyles="sm:mb-2"
          dropDownWrapperStyles="h-28 min-[370px]:h-26 min-[486px]:h-18"
        />
        <AlertInfo
          styles={`bs bg-transparent mb-6! bg-gradient-to-tl from-gray-100 to-transparent 
            br-lg max-w-3xl lg:max-w-4xl m-auto border border-gray-300`}
          text={`Registre um tipo de peça de cada vez. Por exemplo: primeiro as camisetas básicas lisas, 
              depois as camisas polos, e assim por diante. Isso facilita o cadastro e evita confusão.`}
        />
        <Photos />
        <GenderButtons />
        <ProductBasesList />
        <BaseGenerator />
        <FinalInformations />
        <Result />
      </div>
    </>
  );
};

export default page;
