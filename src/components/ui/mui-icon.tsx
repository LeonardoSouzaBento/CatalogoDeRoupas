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

interface IconProps {
  icon: string;
  size?: string;
  fill?: boolean | number;
  weight?: number;
  className?: string;
}

export const MuiIcon = ({ icon, size, fill = false, weight = 600, className }: IconProps) => {
  const fillValue = fill ? 1 : 0;
  return (
    <div className="h-3 inline-flex items-center justify-center overflow-visible">
      <span
        className={`material-symbols-rounded ${className}`}
        style={{
          fontVariationSettings: `"FILL" ${fillValue}, "wght" ${weight}`,
          fontSize: iconSizes[size as keyof typeof iconSizes] || size || '1em',
        }}>
        {icon}
      </span>
    </div>
  );
};
