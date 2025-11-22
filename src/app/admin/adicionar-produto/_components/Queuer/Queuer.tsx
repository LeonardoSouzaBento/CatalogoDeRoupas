"use client";
import React from "react";
import { HeaderCard } from "@/app/loja/_ui";
import QueuerButton from "./components/QueuerButton";
import QuantitySelector from "./components/QuantitySelector";
import { StateSetter } from "@/types/types";
import CardWrapper from "@/app/loja/_ui/CardWrapper";

interface Props {
  selectedQuantity: number;
  setSelectedQuantity: StateSetter<number>;
}

const Queuer = ({ selectedQuantity, setSelectedQuantity }: Props) => {
  return (
    <CardWrapper>
      <HeaderCard
        title="Enfileirar produtos"
        subtitle="Fazer cópias editáveis desse produto"
      />

      <QuantitySelector
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
      />
      <QueuerButton selectedQuantity={selectedQuantity} />
    </CardWrapper>
  );
};

export default Queuer;
