import React from "react";
import { HeaderCard } from "@/app/loja/_ui";
import ProductTable from "./components/ProductTable";
import SaveProductButton from "./components/SaveProductButton";

const Result = () => {
  return (
    <div className={`basic-card-style max-w-3xl lg:max-w-4xl mx-auto`}>
      <HeaderCard title="Resultado" />
      <ProductTable />
      <SaveProductButton />
    </div>
  );
};

export default Result;
