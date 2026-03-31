import type { LucideIcon, LucideProps } from "lucide-react";

type SizeValue = keyof typeof iconSizes;
const iconSizes = {
  xxs: "0.889em",
  xs: "0.943em",
  sm: "1em",
  base: "1.061em",
  md: "1.125em",
  lg: "1.266em",
  xl: "1.424em",
  "2xl": "1.602em",
  h6: "1.125em",
  h5: "1.266em",
  h4: "1.424em",
  h3: "1.602em",
};

type StrokeValue = keyof typeof weights;
const weights = {
  thin: 1.55,
  extralight: 1.7,
  light: 1.85,
  normal: 2,
  medium: 2.15,
  semibold: 2.3,
  bold: 2.45,
  extrabold: 2.6,
};

interface IconProps extends Omit<LucideProps, "size" | "strokeWidth"> {
  Svg: LucideIcon;
  size?: SizeValue | string;
  strokeWidth?: StrokeValue | string;
  filledIcon?: boolean;
}

export const Icon = ({
  Svg,
  size,
  strokeWidth,
  className,
  fill = "none",
  filledIcon = false,
  ...props
}: IconProps) => {
  const filling =
    fill === "duo-tone"
      ? "var(--color-icon-fill)"
      : filledIcon
        ? "currentColor"
        : fill;

  return (
    <div
      className={`h-3 w-max inline-flex items-center justify-center gap-0
      [&_svg]:shrink-0 [&_svg]:pointer-events-none`}
    >
      <Svg
        data-icon
        className={className}
        size={iconSizes[size as SizeValue] || size || "1em"}
        strokeWidth={
          weights[strokeWidth as StrokeValue] ||
          strokeWidth ||
          (filledIcon ? 0 : weights.normal)
        }
        fill={filling}
        {...props}
      />
    </div>
  );
};
