import React from "react";
import { iconMdStyles } from "@/app/lucideIconStyles";
import { BooleanSetter } from "@/types/types";
import { X } from "lucide-react";

const css = {
  button: `h-9 min-w-9 p-0 flex justify-center items-center rounded-md 
  bg-gray-50 hover:bg-gray-100 transition-colors duration-200 shadow-soft-hover`,
  defaultPosition: "absolute top-[10.5px] right-[10.5px]",
};

const ButtonClose = ({
  setState,
  positionStyles,
  styles,
  iconStyles
}: {
  setState: BooleanSetter;
  positionStyles?: string;
  styles?: string;
  iconStyles?: object;
}) => {
  return (
    <button
      className={`
       ${css.button} 
       ${positionStyles ? positionStyles : css.defaultPosition} 
       ${styles && styles}`}
      onClick={(e) => {
        e.stopPropagation();
        setState(false);
      }}
    >
      <X {...iconMdStyles} strokeWidth={1.9} {...iconStyles}/>
    </button>
  );
};

export default ButtonClose;
