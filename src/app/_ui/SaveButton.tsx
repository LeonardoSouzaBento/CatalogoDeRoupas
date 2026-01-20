'use client';
import { iconMd } from '@/css/lucideIconStyles';
import { CircleCheckBig } from 'lucide-react';

interface Props {
  text?: string;
  styles?: string;
  Function?: () => Promise<void>;
}

const SaveButton = ({ text = 'Salvar', styles, Function }: Props) => {
  return (
    <button onClick={Function} className={`w-full ${styles}`}>
      {text}
      <CircleCheckBig {...iconMd} />
    </button>
  );
};

export default SaveButton;
