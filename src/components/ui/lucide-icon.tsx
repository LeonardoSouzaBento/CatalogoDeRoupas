import { LucideIcon } from 'lucide-react';

interface IconProps {
  LucideIcon: LucideIcon;
  size?: string;
  className?: string;
  strokeValue?: string | number;
  fill?: string;
}

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

const weights = {
  thin: 2.25,
  light: 2.35,
  normal: 2.5,
  semibold: 2.67,
  bold: 2.8,
  extrabold: 3,
};

export const Icon = ({ LucideIcon, size, className, strokeValue, fill }: IconProps) => {
  return (
    <div className="h-3 w-max inline-flex items-center justify-center gap-0 [&_svg]:shrink-0">
      <LucideIcon
        size={iconSizes[size as keyof typeof iconSizes] || size || '1em'}
        strokeWidth={weights[strokeValue as keyof typeof weights] || strokeValue || 2.5}
        className={className}
        fill={fill || 'none'}
      />
    </div>
  );
};
