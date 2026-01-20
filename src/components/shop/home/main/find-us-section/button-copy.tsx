import { iconSm } from '@/css/lucideIconStyles';
import { BooleanSetter } from '@/types/types';
import { Copy, CopyCheck } from 'lucide-react';

interface ButtonCopyProps {
  state: boolean;
  setState: BooleanSetter;
  firstText: string;
  secondText?: string;
  textToCopy: string;
}

const css = { button: 'button min-w-max' };

const ButtonCopy = ({ state, setState, firstText, secondText, textToCopy }: ButtonCopyProps) => {
  function handleClickCopy() {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setState(true);
        setTimeout(() => setState(false), 2800);
      })
      .catch(console.error);
  }

  return (
    <button className={`${css.button}`} onClick={handleClickCopy}>
      {!state ? firstText : secondText || 'Copiado!'}
      {!state ? <Copy  /> : <CopyCheck  />}
    </button>
  );
};

export default ButtonCopy;
