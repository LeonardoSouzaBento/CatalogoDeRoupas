import { AlertInfo, TitlePage } from "@/app/loja/_ui";
import React from "react";

const page = () => {
  return (
    <>
      <TitlePage title="Cadastrar Produtos" />
      <div className="px-3">
        <div className="bg-white br-lg shadow-soft p-6">
          <AlertInfo
            text={`Registre um tipo de peça por vez para facilitar o cadastro e evitar confusão. 
              Exemplo: primeiro as camisas básicas, 
              depois as camisas polo, e assim por diante.`}
          />
        </div>
      </div>
    </>
  );
};

export default page;
