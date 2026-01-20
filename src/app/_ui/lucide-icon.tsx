import { LucideIcon } from 'lucide-react';

interface IconProps {
  size?: string;
  LucideIcon: LucideIcon;
  className?: string;
  strokeValue: string | number;
}

const iconSizes = {
  xs: '0.937em',
  sm: '0.968em',
  md: '1em',
  lg: '1.033em',
  h6: '1.067em',
  h5: '1.138em',
  h4: '1.215em',
  h3: '1.296em',
  xl: '1.067em',
  '2xl': '1.138em',
  '3xl': '1.215em',
  '4xl': '1.296em',
};

const weights = {
  thin: 2.2,
  light: 2.4,
};

export const Icon = ({ size, LucideIcon, className, strokeValue }: IconProps) => {
  return (
    <LucideIcon
      size={iconSizes[size as keyof typeof iconSizes] || size || '1em'}
      strokeWidth={weights[strokeValue as keyof typeof weights] || strokeValue || 2.6}
      className={className || ''}
    />
  );
};
