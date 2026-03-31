"use client";
import { useState } from "react";
import {
  BaseGenerator,
  FinalInfo,
  Photos,
  Queue,
  Queuer,
  Result,
  SaveCard,
} from "./add-product";

const AddProductCore = () => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);

  return (
    <>
      <Queue />
      <Photos />
      <BaseGenerator />
      <FinalInfo />
      <Result />
      <Queuer
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
      />
      <SaveCard />
    </>
  );
};

export default AddProductCore;
