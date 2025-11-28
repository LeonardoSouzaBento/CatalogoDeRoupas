import React, { ReactNode } from "react";

interface Props {
  styles?: string;
  wFull?: boolean;
  light?: boolean;
  squareOrCircular?: boolean;
  white?: boolean;
  onClick: () => void;
  children: ReactNode;
}

const button = ({
  styles,
  wFull,
  white,
  squareOrCircular,
  onClick,
  children,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles} ${white && "white-button"} ${wFull && "w-full"} ${
        squareOrCircular && "p-0 centralize"
      }`}
    >
      {children}
    </button>
  );
};

export default button;
