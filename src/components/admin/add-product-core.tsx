"use client";
import { useResizeCount } from "@/hooks";
import { useState } from "react";
import {
  BaseGenerator,
  FinalInfo,
  Photos,
  ProductBasesList,
  Queue,
  Queuer,
  Result,
  SaveCard
} from "./add-product";

const AddProductCore = ({ children }: { children: React.ReactNode }) => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(0);
  const resizeCount = useResizeCount();

  return (
    <div className={`max-w-3xl lg:max-w-4xl mx-auto space-y-6 mt-3`}>
      {children}
      <Queue />
      <ProductBasesList resizeCount={resizeCount} />
      <Photos />
      <BaseGenerator />
      <FinalInfo />
      <Result />
      <Queuer
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
      />
      <SaveCard />
    </div>
  );
};

export default AddProductCore;
