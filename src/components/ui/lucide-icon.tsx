import type { LucideIcon as LucideIconType, LucideProps } from 'lucide-react';

type SizeValue = keyof typeof iconSizes;
const iconSizes = {
  xs: '0.889em',
  sm: '0.943em',
  md: '1em',
  lg: '1.061em',
  h6: '1.125em',
  h5: '1.266em',
  h4: '1.424em',
  h3: '1.602em',
  xl: '1.125em',
  '2xl': '1.266em',
  '3xl': '1.424em',
  '4xl': '1.602em',
};

type StrokeValue = keyof typeof weights;
const weights = {
  thin: 2.25,
  light: 2.35,
  normal: 2.5,
  medium: 2.67,
  semibold: 2.8,
  bold: 3,
};

interface IconProps extends Omit<LucideProps, 'size' | 'strokeWidth'> {
  LucideIcon: LucideIconType;
  size?: SizeValue | string;
  strokeWidth?: StrokeValue | string;
}

export const Icon = ({ LucideIcon, size, className, strokeWidth, fill, ...props }: IconProps) => {
  return (
    <div
      className={`h-3 w-max inline-flex items-center justify-center gap-0
      [&_svg]:shrink-0 [&_svg]:pointer-events-none`}>
      <LucideIcon
        size={iconSizes[size as SizeValue] || size || '1em'}
        strokeWidth={weights[strokeWidth as StrokeValue] || strokeWidth || '2.55'}
        className={className}
        fill={fill || 'none'}
        {...props}
      />
    </div>
  );
};
