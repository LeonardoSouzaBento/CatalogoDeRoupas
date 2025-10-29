import { iconMdStyles } from "@/app/lucideIconStyles";
import { BoolSetter } from "@/types/types";
import { X } from "lucide-react";
import React from "react";

const ButtonClose = ({
  setState,
  positionStyles,
  styles,
}: {
  setState: BoolSetter;
  positionStyles?: string;
  styles?: string;
}) => {
  return (
    <button
      className={`close-button ${
        positionStyles ? positionStyles : "absolute top-[10.5px] right-[10.5px]"
      } ${styles && styles}`}
      onClick={() => {
        setState(false);
      }}
    >
      <X {...iconMdStyles} strokeWidth={1.9} />
    </button>
  );
};

export default ButtonClose;
