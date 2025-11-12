import React from "react";
import { HeaderCard } from "@/app/loja/_ui";

/* 
genero, 
infantil, 
categoria, 
subcategoria, 
estampado, 
padrao principal, 
preço, 
composicao, 
idade da crianca, 
marca, 
cor principal, 
padrao_secundario, 
diferencial, 
descrição, 
tamanho
 */

const Result = () => {
  return (
    <div className={`basic-card-style max-w-3xl lg:max-w-4xl mx-auto`}>
      <HeaderCard title="Resultado" />
    </div>
  );
};

export default Result;
