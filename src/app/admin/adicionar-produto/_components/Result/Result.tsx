import React from "react";
import { HeaderCard } from "@/app/loja/_ui";
import ProductTable from "./components/ProductTable";
import SaveProductButton from "./components/SaveProductButton";
import CardWrapper from "@/app/loja/_ui/CardWrapper";

const Result = () => {
  return (
    <CardWrapper>
      <HeaderCard title="Resultado" />
      <ProductTable />
      <SaveProductButton />
    </CardWrapper>
  );
};

export default Result;
