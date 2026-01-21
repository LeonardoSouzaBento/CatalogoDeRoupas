import { StateSetter } from '@/types/types';
import { X } from 'lucide-react';
import { Button } from './button';
import { Icon } from './lucide-icon';

interface CloseButtonProps {
  setState: StateSetter<boolean>;
  className?: string;
  variant?: 'transparent' | 'secondary';
  size?: 'icon' | 'icon-lg' | 'icon-sm';
}

const CloseButton = ({
  setState,
  className,
  variant = 'transparent',
  size = 'icon',
}: CloseButtonProps) => {
  return (
    <Button size={size} variant={variant} className={className} onClick={() => setState(false)}>
      <Icon LucideIcon={X} size="lg" />
    </Button>
  );
};

export { CloseButton };
