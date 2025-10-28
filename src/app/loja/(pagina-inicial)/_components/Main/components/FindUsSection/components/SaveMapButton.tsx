import React from "react";
// import { BoolSetter } from "@/types/types";
import { Check } from "lucide-react";
import { iconMdStyles } from "@/app/styles";

const SaveMapButton = () => {
  function handleSave() {
    console.log("");
  }
  return (
    <button className="button min-w-max" onClick={handleSave}>
      Salvar Mapa
      <Check {...iconMdStyles} />
    </button>
  );
};

export default SaveMapButton;