import type { StateSetter } from '@/types/types';
import { X } from 'lucide-react';
import { Button } from './button';
import { Icon } from './lucide-icon';
import { cn } from '@/lib/utils';

interface CloseButtonProps {
  setState: StateSetter<boolean>;
  className?: string;
  variant?: 'transparent' | 'secondary';
  size?: 'icon' | 'icon-lg' | 'icon-sm';
}

const CloseButton = ({
  setState,
  className,
  variant = 'secondary',
  size = 'icon',
}: CloseButtonProps) => {
  return (
    <Button
      size={size}
      variant={variant}
      className={cn('rounded-full', className)}
      onClick={() => setState(false)}>
      <Icon LucideIcon={X} size="lg" />
    </Button>
  );
};

export { CloseButton };
