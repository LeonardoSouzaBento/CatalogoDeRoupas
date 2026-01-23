import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  `h-max inline-flex items-center justify-center box-border leading-none! gap-2 rounded-sm transition-all duration-200 disabled:pointer-events-none [&_svg]:block [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative box-border tracking-wide`,
  {
    variants: {
      variant: {
        default: 'bg-primary-700 text-primary-50 hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border-2 border-primary-700 bg-transparent hover:bg-primary-50 text-primary-700 shadow-xs hover:bg-accent dark:bg-/30 dark:border- dark:hover:bg-/50',
        secondary: 'bg-primary-100 text-primary-800 hover:bg-primary-300',
        ghost:
          'text-primary-800 ring ring-border hover:bg-primary-50/50',
        link: 'text-blue-600 underline-offset-4 hover:underline',
        transparent: 'bg-transparent hover:bg-transparent',
      },
      size: {
        sm: 'py-[0.63885rem] rounded-md gap-1.5',
        default: 'py-[0.73438rem]',
        lg: 'py-[0.82813rem] text-lg-button rounded-md',
        'outline-sm': 'px-[0.79716em] py-[0.54794rem] text-sm-button',
        outline: 'px-[0.80304em] py-[0.64347rem]',
        'outline-lg': 'px-[0.80857em] py-[0.73722rem] text-lg-button',
        icon: 'size-8.5',
        'icon-sm': 'size-8',
        'icon-md': 'size-9',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';
  const textSizes = ['sm', 'default', 'lg', null, undefined];
  const paddingInline = textSizes.includes(size) ? `px-[0.83em]` : '';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }), paddingInline)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
