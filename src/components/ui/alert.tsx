import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const alertVariants = cva(
  `small-text relative w-full rounded-md border px-4 py-3 items-start has-[svg]:grid
  has-[svg]:grid-cols-[max-content_1fr] has-[svg]:gap-x-2 [&_svg:first-child]:mt-[0.9em]`,
  {
    variants: {
      variant: {
        default: 'bg-light-bg text-card-foreground',
        destructive: 'text-destructive bg-card *:data-[slot=alert-description]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn('col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight', className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn('text-muted-foreground col-start-2 grid justify-items-start gap-1', className)}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
