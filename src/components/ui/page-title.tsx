import { cn } from '@/lib/utils';
import React from 'react';

function PageHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="page-header"
      className={cn(
        'box-border bg-stone-800 flex items-center justify-center rounded-none',
        className,
      )}
      {...props}
    />
  );
}

export function PageHeaderWrapper({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="page-header"
      className={cn(
        'box-border bg-stone-800 flex items-center justify-center rounded-none',
        className,
      )}
      {...props}
    />
  );
}

function PageTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      data-slot="page-title"
      className={cn(
        'w-full px-3 sm:px-4 py-3 text-white font-bold leading-none capitalize mt-px trancinkg-[0.24px]',
        className,
      )}
      {...props}
    />
  );
}

export { PageHeader, PageTitle };
