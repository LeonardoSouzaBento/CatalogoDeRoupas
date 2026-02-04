import { Button, Icon } from '@/components/ui';
import { Layers } from 'lucide-react';

export const QueuerButton = ({ selectedQuantity }: { selectedQuantity: number }) => {
  return (
    <Button variant="outline" className="w-full">
      {selectedQuantity > 0 ? `Enfileirar ${selectedQuantity} produtos` : 'Enfileirar produtos'}
      <Icon LucideIcon={Layers} />
    </Button>
  );
};
