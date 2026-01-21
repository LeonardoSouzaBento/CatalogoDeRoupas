import { cn } from '@/lib/utils';
import React from 'react';

function PageHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="page-header"
      className={cn(
        'h-14 box-border px-3 pl-[13px] mb-3 bg-stone-800 flex items-center justify-center br-0',
        className,
      )}
      {...props}
    />
  );
}

function PageTitle({ className, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1
      data-slot="page-title"
      className={cn(
        'w-full text-white font-bold leading-none capitalize  mt-px trancinkg-[0.24px]',
        className,
      )}
      {...props}
    />
  );
}

export { PageHeader, PageTitle };
