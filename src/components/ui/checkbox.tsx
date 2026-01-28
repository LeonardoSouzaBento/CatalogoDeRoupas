'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Icon } from './lucide-icon';

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer min-w-4.5 min-h-4.5 p-0.5 border data-[state=checked]:border-none data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:bg-primary-800 focus-visible:border-blue-300 focus-visible:ring-blue-300 aria-invalid:ring-destructive/20 aria-invalid:border-destructive rounded-sm shadow-xs transition-shadow outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex-center transition-none bg-primary-800">
        <Icon LucideIcon={CheckIcon} className="text-light-bg" size='sm' strokeValue={"semibold"} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
