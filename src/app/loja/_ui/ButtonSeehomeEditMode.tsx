import { iconMdStyles } from "@/app/lucideIconStyles";
import { BooleanSetter } from "@/types/types";
import { Pen } from "lucide-react";
import React from "react";

const ButtonSeehomeEditMode = ({ setState }: { setState: BooleanSetter }) => {
  return (
    <button
      className="absolute bottom-2 right-2 square-button"
      onClick={() => {
        setState(true);
      }}
    >
      <Pen {...iconMdStyles} />
    </button>
  );
};

export default ButtonSeehomeEditMode;
