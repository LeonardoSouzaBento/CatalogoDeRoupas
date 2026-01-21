import { Button, Icon, MuiIcon } from '@/components/ui';
import { cn } from '@/lib/utils';
import { BooleanSetter } from '@/types/types';
import { Pen } from 'lucide-react';

interface Props {
  setState: BooleanSetter;
  className?: string;
  variantion?: string;
  section?: string;
}

const ButtonSeeEditMode = ({ setState, className, variantion, section }: Props) => {
  const isTitle = variantion === 'title';
  const clothesCss = section === 'clothes' ? 'mb-3' : '';

  return (
    <Button
      size={!isTitle ? 'icon' : 'default'}
      className={cn('absolute bottom-3 right-3', clothesCss, className)}
      onClick={() => {
        setState(true);
      }}>
      {!variantion && <MuiIcon icon="stylus" />}
      {variantion === 'title' && (
        <>
          <Icon LucideIcon={Pen} />
          Editar seção
        </>
      )}
    </Button>
  );
};

export { ButtonSeeEditMode };
