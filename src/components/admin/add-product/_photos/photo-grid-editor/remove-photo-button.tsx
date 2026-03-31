import { Icon } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export const RemovePhotoButton = () => {
  return (
    <Button
      variant="destructive"
      size="icon-sm"
      className="absolute top-1 right-1 z-10 rounded-full backdrop-blur-sm shadow-sm">
      <Icon Svg={X} strokeWidth="medium" size='md' />
    </Button>
  );
};
