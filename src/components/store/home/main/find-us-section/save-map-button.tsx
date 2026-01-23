// import { BoolSetter } from "@/types/types";
import { Button } from '@/components/ui/button';
import { CircleCheckBig } from 'lucide-react';

export const SaveMapButton = ({ Value }: { Value: string }) => {
  async function handleSave() {
    console.log(Value);
  }
  return (
    <Button onClick={handleSave} className="w-full">
      Salvar mapa
      <CircleCheckBig />
    </Button>
  );
};
