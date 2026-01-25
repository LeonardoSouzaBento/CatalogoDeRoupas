import React from 'react';
import { cn } from '@/lib/utils';

function SectionHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        `w-full mx-auto flex flex-col items-center`,
        className,
      )}
      {...props}
    />
  );
}

function SectionTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return <h3 className={cn('max-w-max', className)} {...props} />;
}

function SectionDescription({ className, ...props }: React.ComponentProps<'h6'>) {
  return <p className={cn('max-w-max text-gray-500 large-text text-center mb-ex-offset', className)} {...props} />;
}

export { SectionHeader, SectionTitle, SectionDescription };
