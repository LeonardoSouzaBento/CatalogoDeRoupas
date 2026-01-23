import React from 'react';
import { cn } from '@/lib/utils';

function SectionHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        `
        w-[calc(100%-3.25rem)] lg:w-[calc(100%-9.375rem)]
        m-auto flex flex-col items-center pt-4
        border-t-2 border-dashed
        `,
        className
      )}
      {...props}
    />
  );
}

function SectionTitle({
  className,
  ...props
}: React.ComponentProps<'h3'>) {
  return (
    <h3
      className={cn('text-stone-800 text-center', className)}
      {...props}
    />
  );
}

function SectionDescription({
  className,
  ...props
}: React.ComponentProps<'h6'>) {
  return (
    <h6
      className={cn('text-gray-500 text-center mb-6', className)}
      {...props}
    />
  );
}

export {
  SectionHeader,
  SectionTitle,
  SectionDescription,
};
