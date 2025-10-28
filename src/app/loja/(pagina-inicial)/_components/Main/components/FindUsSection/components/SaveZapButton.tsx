import React from "react";
// import { BoolSetter } from "@/types/types";
import { Check } from "lucide-react";
import { iconMdStyles } from "@/app/styles";

const SaveZapButton = () => {
  function handleSave() {
    console.log("");
  }
  return (
    <button className="button min-w-max" onClick={handleSave}>
      Salvar Whatsapp
      <Check {...iconMdStyles} />
    </button>
  );
};

export default SaveZapButton;