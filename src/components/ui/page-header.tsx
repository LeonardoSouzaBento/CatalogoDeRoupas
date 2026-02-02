import { cn } from '@/lib/utils';
import React from 'react';

function PageHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="page-header"
      className={cn('bg-stone-800 rounded-none', className)}
      {...props}
    />
  );
}

function PageHeaderWrapper({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="page-header"
      className={cn(
        'h-14 mx-auto flex items-center justify-center rounded-none',
        className,
      )}
      {...props}
    />
  );
}

function PageTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h3
      data-slot="page-title"
      className={cn(
        'w-full text-white font-bold leading-none capitalize mt-px',
        className,
      )}
      {...props}
    />
  );
}

export { PageHeader, PageTitle, PageHeaderWrapper };
