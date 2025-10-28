import React from "react";
// import { BoolSetter } from "@/types/types";
import { Check } from "lucide-react";
import { iconMdStyles } from "@/app/lucideIconStyles";

const SaveMapButton = ({ inputValue } : { inputValue: string }) => {
  function handleSave() {
    console.log(inputValue);
  }
  return (
    <button className="button min-w-max" onClick={handleSave}>
      Salvar Mapa
      <Check {...iconMdStyles} />
    </button>
  );
};

export default SaveMapButton;
