import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export const RemovePhotoButton = () => {
  return (
    <Button
      variant="secondary"
      size="icon"
      className="size-8 absolute top-1 right-1 rounded-full bg-light-bg/88 backdrop-blur-sm shadow-sm">
      <X size={16} />
    </Button>
  );
};
