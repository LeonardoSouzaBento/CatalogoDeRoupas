import React from "react";
import { HeaderCard } from "@/app/loja/_ui";
import ProductTable from "./components/ProductTable";
import CardWrapper from "@/app/loja/_ui/CardWrapper";

const Result = () => {
  return (
    <CardWrapper>
      <HeaderCard title="Resultado" icon="equal" iconStyles="span19" />
      <ProductTable />
    </CardWrapper>
  );
};

export default Result;
