import React from "react";
import { gray800, iconMd, neutral300 } from "@/app/lucideIconStyles";
import { Layers } from "lucide-react";

const QueuerButton = ({ selectedQuantity }: { selectedQuantity: number }) => {
  return (
    <button className={`w-full justify-center ${selectedQuantity == 0 && "text-neutral-400"}`}>
      {selectedQuantity > 0
        ? `Enfileirar ${selectedQuantity} produtos`
        : "Enfileirar produtos"}
      <Layers {...iconMd} color={selectedQuantity == 0 ? neutral300 : gray800} />
    </button>
  );
};

export default QueuerButton;
