import React from 'react';
// import { BoolSetter } from "@/types/types";
import { Check } from 'lucide-react';
import { iconMd } from '@/css/lucideIconStyles';
import { AddressSchema } from '@/types/types';

const SaveAddressButton = ({
  Value,
  addressComplete,
}: {
  Value: AddressSchema;
  addressComplete: boolean;
}) => {
  function handleSave() {
    console.log(addressComplete);
    console.log(Value);
  }
  return (
    <button className="button min-w-max" onClick={handleSave}>
      Salvar Endereço
      <Check {...iconMd} />
    </button>
  );
};

export default SaveAddressButton;
