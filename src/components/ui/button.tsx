import { cn } from "@/utils/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

export type ButtonVariants = VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  `h-fit inline-flex items-center justify-center leading-none! box-border gap-2 rounded-sm transition-all duration-200 disabled:pointer-events-none shrink-0 outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive relative box-border tracking-wide cursor-pointer disabled:cursor-not-allowed! capitalize data-w-full:w-full data-option:rounded-full data-option:px-[0.66em] text-left outline-solid outline-0 data-less-pl:pl-[0.6em] font-[500] data-round:rounded-full`,
  {
    variants: {
      variant: {
        default: `bg-primary-800 text-primary-50 hover:bg-primary-700 active:bg-primary-1000 active:text-primary-50 
        disabled:bg-neutral-300 disabled:text-neutral-500/80 hover:bg-primary-700`,

        outline: `bg-transparent text-primary-800 ring-[1.5px] ring-primary-800 
        active:bg-primary-100 disabled:bg-neutral-100 disabled:ring-neutral-300 
        disabled:text-neutral-500/75 hover:bg-primary-50 font-[525] rounded-[3.5px]`,

        ghost: `bg-transparent text-primary-800 border border-border 
        active:bg-primary-100 active:text-primary-900 disabled:bg-neutral-100 disabled:text-neutral-400 
        disabled:border-none hover:bg-primary-50/75 data-white:bg-light-bg data-white:hover:bg-primary-50`,

        secondary: `bg-primary-50 text-primary-700 hover:bg-primary-50/66 
        saturate-120 active:bg-primary-100 active:text-primary-800 
        disabled:bg-neutral-100 disabled:text-neutral-400
      `,

        link: `text-blue-600 underline-offset-4 hover:underline`,

        transparent: `bg-transparent text-primary-800 hover:bg-primary-50 px-[0.93em]
        disabled:bg-neutral-100 disabled:text-neutral-400`,

        destructive: `bg-destructive-700 text-destructive-50 hover:bg-destructive-600 
        active:bg-destructive-800 `,
      },
      size: {
        xs: "h-8 small-text",
        sm: "h-9 small-button",
        default: "h-10",
        lg: "h-11 text-button-lg",
        icon: "size-8.5",
        "icon-sm": "size-8",
        "icon-md": "size-9",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const paddings = {
  default: {
    sm: "px-[0.93em] py-[0.63885rem]",
    default: "px-[0.93em] py-[0.73438rem]",
    lg: "px-[0.93em] py-[0.82813rem]",
  },
  outline: {
    sm: "px-[0.82716em] py-[0.54794rem]",
    default: "px-[0.83304em] py-[0.64347rem]",
    lg: "px-[0.83857em] py-[0.73722rem]",
  },
  ghost: {
    sm: "px-[0.82841em] py-[0.6076rem]",
    default: "px-[0.83429em] py-[0.70313rem]",
    lg: "px-[0.83982em] py-[0.79688rem]",
  },
};

type OmitVariant = keyof typeof paddings | "destructive" | "secondary";
type OmitSize = keyof typeof paddings.default;
const paddingExptions = {
  variants: ["link", "transparent"],
  sizes: ["icon", "icon-sm", "icon-md", "icon-lg"],
};

const getPaddings = (variant: OmitVariant, size: OmitSize): string => {
  let padding = "";
  if (
    !paddingExptions.sizes.includes(size) &&
    !paddingExptions.variants.includes(variant)
  ) {
    padding =
      variant === "destructive" || variant === "secondary"
        ? paddings.default[size]
        : paddings[variant][size];
  }
  return padding;
};

export interface ButtonProps
  extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  selected?: boolean;
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  selected = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const padding = getPaddings(variant as OmitVariant, size as OmitSize);
  const selectedButton = selected
    ? "ring-2 ring-selected-300 bg-selected-50/50 hover:bg-light-bg text-selected-700 border-none"
    : "";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(
        buttonVariants({ variant, size }),
        padding,
        selectedButton,
        className,
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
