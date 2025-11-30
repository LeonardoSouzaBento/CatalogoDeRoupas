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
  optionList: `option-list-button p175`,
  white: `white-button`,
  transparent: `transparent-button`,
  outlined: `outlined-button`,
};

const selectedStyles = {
  optionList: `bg-white hover:bg-white/60 shadow-soft-soft border border-gray-300`,
  outlined: `ring-style`,
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
    squareOrCircular && "p-0 centralize",
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
      {iconFirst && <div className="wrapper-icon">{icon}</div>}
      {children}
      {!iconFirst && <div className="wrapper-icon">{icon}</div>}
    </button>
  );
};

export default Button;
