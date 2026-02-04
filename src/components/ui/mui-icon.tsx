type SizeValue = keyof typeof iconSizes;
const iconSizes = {
  xs: '0.790123em',
  sm: '0.888889em',
  md: '1em',
  lg: '1.125em',
  xl: '1.2656em',
  '2xl': '1.4238em',
  '3xl': '1.6018em',
  h6: '1.125em',
  h5: '1.2656em',
  h4: '1.4238em',
  h3: '1.6018em',
};

interface IconProps {
  icon: string;
  size?: SizeValue | string;
  fill?: boolean;
  weight?: number;
}

export const MuiIcon = ({
  icon,
  size,
  fill = false,
  weight = 600,
  className,
  ...props
}: React.ComponentProps<'span'> & IconProps) => {
  const fillValue = fill ? 1 : 0;
  return (
    <div className="h-3 inline-flex items-center justify-center overflow-visible">
      <span
        className={`material-symbols-rounded ${className}`}
        style={{
          fontVariationSettings: `"FILL" ${fillValue}, "wght" ${weight}`,
          fontSize: iconSizes[size as SizeValue] || size || '1em',
        }}
        {...props}>
        {icon}
      </span>
    </div>
  );
};
