import React from "react";
// import { BoolSetter } from "@/types/types";
import { Check } from "lucide-react";
import { iconMdStyles } from "@/app/lucideIconStyles";
import { AddressSchema } from "@/types/types";

const SaveAddressButton = ({
  inputValue,
  addressComplete,
}: {
  inputValue: AddressSchema;
  addressComplete: boolean;
}) => {
  function handleSave() {
    console.log(addressComplete);
    console.log(inputValue);
  }
  return (
    <button className="button min-w-max" onClick={handleSave}>
      Salvar Endereço
      <Check {...iconMdStyles} />
    </button>
  );
};

export default SaveAddressButton;
