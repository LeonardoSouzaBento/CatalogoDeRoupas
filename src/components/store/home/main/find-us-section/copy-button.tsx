import { Button, Icon } from '@/components/ui';
import type { BooleanSetter } from '@/types/types';
import { Copy, CopyCheck } from 'lucide-react';

interface CopyButtonProps {
  state: boolean;
  setState: BooleanSetter;
  firstText: string;
  secondText?: string;
  textToCopy: string;
  className?: string;
}

export const CopyButton = ({
  state,
  setState,
  firstText,
  secondText,
  textToCopy,
  className,
}: CopyButtonProps) => {
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
    <Button variant="ghost" className={className} onClick={handleClickCopy}>
      {!state ? firstText : secondText || 'Copiado!'}
      <Icon LucideIcon={state ? CopyCheck : Copy} />
    </Button>
  );
};
