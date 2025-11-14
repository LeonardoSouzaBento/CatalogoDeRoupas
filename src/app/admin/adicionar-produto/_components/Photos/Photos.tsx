"use client";
import React from "react";
import { AlertInfo, HeaderCard } from "@/app/loja/_ui";
import PhotoGridEditor from "./components/PhotoGridEditor/PhotoGridEditor";

const Photos = () => {
  return (
    <div className={`basic-card-style max-w-3xl lg:max-w-4xl mx-auto relative`}>
      <HeaderCard title="Fotos" icon="photo_library" />
      <PhotoGridEditor />
      <AlertInfo
        styles="bg-gray-50/80! mb-0!"
        text={`Adicione pelo menos três fotos para cada roupa 
        (frente, costas e o tecido visto de perto). O mais recomendado é adicionar 5 fotos
        , mostrando também a lateral da peça e a peça sendo usada por uma pessoa. 
          Assim o cliente se mantêm interessado.`}
      />
    </div>
  );
};

export default Photos;
