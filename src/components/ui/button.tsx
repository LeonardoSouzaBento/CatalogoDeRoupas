import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type VariantType = ButtonVariants['variant'];
export type SizeType = ButtonVariants['size'];

const buttonVariants = cva(
  `h-fit inline-flex items-center justify-center box-border leading-none gap-2 rounded-sm transition-all duration-200 disabled:pointer-events-none shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive relative box-border tracking-wide cursor-pointer capitalize data-w-full:w-full data-option:rounded-full text-left outline-solid outline-0`,
  {
    variants: {
      variant: {
        default: `bg-primary-800 text-primary-50 hover:bg-primary-700 active:bg-primary-900 active:text-primary-50 
        disabled:bg-neutral-300 disabled:text-neutral-500/80 hover:bg-primary-700 
        focus-visible:border-2 focus-visible:border-selected-400`,

        outline: `bg-transparent text-primary-800 border-2 border-primary-700 
        active:bg-primary-100 disabled:bg-neutral-100 disabled:border-neutral-300 
        disabled:text-neutral-500/75 hover:bg-primary-50 
        focus:outline-2 focus:outline-selected-400`,

        ghost: `bg-transparent text-primary-800 border border-border/80 
        active:bg-primary-100 disabled:bg-neutral-100 disabled:text-neutral-400 
        disabled:border-none hover:bg-primary-50 
        focus:outline-2 focus:outline-selected-400 focus:border-primary-600`,

        secondary: `bg-primary-50 text-primary-700 hover:bg-primary-50/66 
        saturate-120 active:bg-primary-100 active:text-primary-800 
        disabled:bg-neutral-100 disabled:text-neutral-400
        focus:outline-2 focus:outline-selected-400`,

        link: `text-blue-600 underline-offset-4 hover:underline`,

        transparent: `bg-transparent hover:bg-primary-50`,
        destructive: `bg-destructive-700 text-destructive-50 hover:bg-destructive-600 
        focus:outline-2 focus:outline-destructive-200 active:bg-destructive-800 `,
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

type OmitVariant = keyof typeof paddingsY;
type OmitSize = keyof typeof paddingsY.default;
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
    sm: 'px-[0.82841em] py-[0.6076rem]',
    default: 'px-[0.83429em] py-[0.70313rem]',
    lg: 'px-[0.83982em] py-[0.79688rem]',
  },
};

/* 
sm:'px-[0.82841em] py-[0.6076rem]',
default:'px-[0.83429em] py-[0.70313rem]',
lg:'px-[0.83982em]py-[0.79688rem]',
*/

const getPaddings = (variant: OmitVariant, size: OmitSize): string => {
  const textSizes = ['sm', 'default', 'lg', null, undefined];
  const exeptionsVariants = ['link', 'destructive', 'outline', 'ghost'];
  const px = textSizes.includes(size) && !exeptionsVariants.includes(variant) ? 'px-[0.83em]' : '';

  const variants = Object.keys(paddingsY);
  const sizes = Object.keys(paddingsY.default);

  let py = '';
  if (variants.includes(variant) && sizes.includes(size)) {
    py = paddingsY[variant][size];
  }

  return `${px} ${py}`.trim();
};

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  selected?: boolean;
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  selected = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  const paddings = getPaddings(variant as OmitVariant, size as OmitSize);
  const selectedButton = selected
    ? 'ring-2 ring-selected-300 bg-selected-50/50 hover:bg-light-bg text-selected-700 border-none'
    : '';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), paddings, selectedButton, className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
