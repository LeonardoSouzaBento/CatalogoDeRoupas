import React from 'react'
import { cn } from '@/lib/utils';

export function WrapperInput({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="wrapper-input"
      className={cn(
        'w-full flex flex-col gap-2',
        className,
      )}
      {...props}
    />
  );
}