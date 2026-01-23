// import { BoolSetter } from "@/types/types";
import { AddressSchema } from '@/types/types';
import { Check } from 'lucide-react';

export const SaveAddressButton = ({
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
      <Check />
    </button>
  );
};
