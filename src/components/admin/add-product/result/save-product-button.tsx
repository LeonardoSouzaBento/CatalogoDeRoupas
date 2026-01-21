import { Button } from '@/components/ui/button';
import { CircleCheckBig } from 'lucide-react';

const SaveProductButton = () => {
  return (
    <Button className="w-full mt-5">
      Salvar produto no catálogo
      <CircleCheckBig />
    </Button>
  );
};

export { SaveProductButton };
