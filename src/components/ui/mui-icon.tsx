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

interface IconProps {
  icon: string;
  size?: string;
  fill?: number;
  weight?: number;
  margin?: string;
  className?: string;
}

export const MuiIcon = ({
  icon,
  size,
  fill = 0,
  weight = 600,
  margin = '0',
  className,
}: IconProps) => {
  return (
    <span
      className={`${className} material-symbols-rounded`}
      style={{
        margin: margin,
        fontVariationSettings: `"FILL" ${fill}, "wght" ${weight}`,
        fontSize: iconSizes[size as keyof typeof iconSizes] || size || '1em',
      }}>
      {icon}
    </span>
  );
};
