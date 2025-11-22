"use client";
import React, { useState } from "react";
import GenderButtons from "./_components/GenderButtons";
import Photos from "./_components/Photos/Photos";
import ProductBasesList from "./_components/ProductBaseList/ProductBasesList";
import BaseGenerator from "./_components/BaseGenerator/BaseGenerator";
import FinalInformations from "./_components/FinaIInformations/FinalInformations";
import Queuer from "./_components/Queuer/Queuer";
import Result from "./_components/Result/Result";

const Core = () => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);

  return (
    <div className={`max-w-3xl lg:max-w-4xl mx-auto`}>
      <ProductBasesList />
      <Photos />
      <GenderButtons />
      <BaseGenerator />
      <FinalInformations />
      <Queuer
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
      />
      <Result />
    </div>
  );
};

export default Core;
