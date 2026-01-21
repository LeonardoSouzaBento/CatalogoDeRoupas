// ARQUIVO COMENTADO - Substituído pelo Button do shadcn UI em @/components/ui/button
// Para usar o novo botão: import { Button } from '@/components/ui/button'

/*
import React, { ReactNode } from "react";

interface Props {
  styles?: string;
  fullWidth?: boolean;
  iconFirst?: boolean;
  variant?:
    | "light"
    | "white"
    | "transparent"
    | "optionList"
    | "outlined"
    | null;
  selected?: boolean;
  squareOrCircular?: boolean;
  justifyCenter?: boolean;
  mb?: boolean;
  icon?: ReactNode;
  onClick: () => void | Promise<void> | ((e: React.MouseEvent) => void);
  children?: ReactNode;
}

const css = {
  optionList: ` 5`,
  white: ``,
  transparent: ``,
  outlined: ``,
};

const selectedStyles = {
  optionList: `bg-white hover:bg-white/60 shadow-sm border border-gray-300`,
  outlined: ``,
};

export const Button = ({
  styles,
  fullWidth,
  variant,
  squareOrCircular,
  onClick,
  children,
  mb,
  justifyCenter,
  icon,
  selected,
  iconFirst = false,
}: Props) => {
  const extraClasses = [
    fullWidth && "w-full",
    squareOrCircular && "p-0 flex-center",
    mb && "mb-5",
    justifyCenter && "justify-center",
  ]
    .filter(Boolean)
    .join(" ");

  const selectedClasses = [
    selected && variant === "optionList" && selectedStyles.optionList,
    selected && variant === "outlined" && selectedStyles.outlined,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      onClick={onClick}
      className={`${styles} ${
        css[(variant as keyof typeof css) || ""]
      } ${extraClasses} ${selectedClasses}`}
    >
      {iconFirst && icon}
      {children}
      {!iconFirst && icon}
    </button>
  );
};

export default Button;
*/
