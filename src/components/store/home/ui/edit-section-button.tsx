import { Button, Icon, MuiIcon } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { BooleanSetter } from '@/types/types';
import { PenLine, PenOff } from 'lucide-react';

interface Props {
  editMode: boolean | undefined;
  setEditMode: BooleanSetter;
  className?: string;
  variantion?: string;
  section?: string;
}

const EditSectionButton = ({ editMode, setEditMode, className, variantion, section }: Props) => {
  const isTitle = variantion === 'title';
  const mb = section === 'clothes' ? 'mb-2' : 'mb-6';
  return (
    <div className="w-full h-max flex justify-center">
      <Button
        size={!isTitle ? 'icon' : 'default'}
        variant={'secondary'}
        className={cn(mb, className)}
        onClick={() => {
          setEditMode((prev) => !prev);
        }}>
        {!variantion && <MuiIcon icon="stylus" />}
        {variantion === 'title' && (
          <>
            <Icon LucideIcon={editMode ? PenOff : PenLine} fill="currentColor" size="xs" />
            {editMode ? 'Fechar edição' : 'Editar seção'}
          </>
        )}
      </Button>
    </div>
  );
};

export { EditSectionButton };
