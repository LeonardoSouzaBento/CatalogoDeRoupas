// ARQUIVO COMENTADO - Substituído pelo Button do shadcn UI em @/components/ui/button
// Para usar o novo botão: import { Button } from '@/components/ui/button'
// Exemplo: <Button onClick={handleSave} className="w-full">Salvar<CircleCheckBig /></Button>

'use client';
import { CircleCheckBig } from 'lucide-react';

interface Props {
  text?: string;
  styles?: string;
  Function?: () => Promise<void>;
}

export const SaveButton = ({ text = 'Salvar', styles, Function }: Props) => {
  return (
    <button onClick={Function} className={`w-full ${styles}`}>
      {text}
      <CircleCheckBig />
    </button>
  );
};
