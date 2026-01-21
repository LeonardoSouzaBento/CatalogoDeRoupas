import { Layers } from 'lucide-react';

export const QueuerButton = ({ selectedQuantity }: { selectedQuantity: number }) => {
  return (
    <button className={`w-full justify-center ${selectedQuantity == 0 && 'text-neutral-400'}`}>
      {selectedQuantity > 0 ? `Enfileirar ${selectedQuantity} produtos` : 'Enfileirar produtos'}
      <Layers  />
    </button>
  );
};
