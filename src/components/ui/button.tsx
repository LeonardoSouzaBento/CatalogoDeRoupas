import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  `h-max inline-flex items-center justify-center box-border leading-none gap-2 rounded-sm transition-all duration-200 disabled:pointer-events-none shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive relative box-border tracking-wide cursor-pointer capitalize data-w-full:w-full`,
  {
    variants: {
      variant: {
        default: 'bg-primary-800 text-primary-50 hover:bg-primary-700 focus:bg-primary-900',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20',
        outline:
          'border-2 border-primary-700 bg-transparent hover:bg-primary-50 text-primary-800 hover:bg-accent',
        secondary: 'bg-primary-100 text-primary-800 hover:bg-primary-100/66 saturate-120',
        ghost: 'text-primary-800 border border-border/80 hover:bg-primary-50/50',
        link: 'text-blue-600 underline-offset-4 hover:underline',
        transparent: 'bg-transparent hover:bg-transparent',
      },
      size: {
        sm: 'min-h-9 small-button',
        default: 'min-h-10',
        lg: 'min-h-11 text-lg-button',
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

export type ButtonVariants = VariantProps<typeof buttonVariants>;

const paddingsY = {
  default: {
    sm: 'py-[0.63885rem]',
    default: 'py-[0.73438rem]',
    lg: 'py-[0.82813rem]',
  },
  outline: {
    sm: 'px-[0.79716em] py-[0.54794rem]',
    default: 'px-[0.80304em] py-[0.64347rem]',
    lg: 'px-[0.80857em] py-[0.73722rem]',
  },
  ghost: {
    sm: 'py-[0.70313rem]',
    default: 'py-[0.70313rem]',
    lg: 'py-[0.70313rem]',
  },
};

const getPaddingY = (
  variant: keyof typeof paddingsY,
  size: keyof typeof paddingsY.default,
): string => {
  const variants = Object.keys(paddingsY);
  const sizes = Object.keys(paddingsY.default);
  if (variants.includes(variant) && sizes.includes(size)) {
    return paddingsY[variant][size];
  }
  return '';
};

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
  const paddingX = textSizes.includes(size) && variant !== 'outline' ? `px-[0.83em]` : '';
  const paddingY = getPaddingY(
    variant as keyof typeof paddingsY,
    size as keyof typeof paddingsY.default,
  );

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), paddingX, paddingY, className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
