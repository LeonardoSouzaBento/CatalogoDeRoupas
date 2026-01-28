import { Button } from '@/components/ui/button';
import { Layers } from 'lucide-react';

export const QueuerButton = ({ selectedQuantity }: { selectedQuantity: number }) => {
  return (
    <Button variant="default" className="w-full">
      {selectedQuantity > 0 ? `Enfileirar ${selectedQuantity} produtos` : 'Enfileirar produtos'}
      <Layers />
    </Button>
  );
};
