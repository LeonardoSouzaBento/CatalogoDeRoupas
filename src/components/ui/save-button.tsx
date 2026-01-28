import { Button } from '@/components/ui/button';
import { CircleCheckBig } from 'lucide-react';

interface Props {
  text?: string;
  styles?: string;
  Function?: () => Promise<void>;
}

export const SaveButton = ({ text = 'Salvar', styles, Function }: Props) => {
  return (
    <Button onClick={Function} className={styles}>
      {text}
      <CircleCheckBig />
    </Button>
  );
};
