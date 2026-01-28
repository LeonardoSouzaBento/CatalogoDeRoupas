import type { BooleanSetter } from '@/types/types';
import { Button } from '@/components/ui/button';
import { CornerUpLeft } from 'lucide-react';

interface Props {
  styles?: string;
  setState?: BooleanSetter;
}

const BackButton = ({ styles, setState = () => {} }: Props) => {
  return (
    <Button
      onClick={() => {
        setState(false);
      }}
      className={styles}>
      voltar
      <CornerUpLeft />
    </Button>
  );
};

export { BackButton };
