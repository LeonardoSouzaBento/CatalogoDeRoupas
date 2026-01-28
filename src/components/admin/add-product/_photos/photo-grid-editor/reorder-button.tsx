import { Button } from '@/components/ui/button';
import type { BooleanSetter, Photo } from '@/types/types';
import { Layers2, X } from 'lucide-react';

interface Props {
  styles?: string;
  reorderMode: boolean;
  setReorderMode: BooleanSetter;
  photos: Photo[];
}

export const ReorderButton = ({ reorderMode, setReorderMode, styles, photos }: Props) => {
  const nonEmptyCount = photos.filter((p) => p.url?.trim() !== '').length;
  const isDisabled = nonEmptyCount < 2;

  function handleActiveReorderMode() {
    if (!isDisabled) {
      setReorderMode(!reorderMode);
    }
  }

  return (
    <Button
      disabled={isDisabled}
      onClick={handleActiveReorderMode}
      variant={reorderMode ? 'default' : 'outline'}
      className={styles}>
      {reorderMode ? 'Sair de reordenar' : 'Reordenar imagens'}
      {reorderMode ? <X /> : <Layers2 size={18} />}
    </Button>
  );
};
