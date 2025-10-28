import { iconMdStyles } from "@/app/lucideIconStyles";
import { BoolSetter } from "@/types/types";
import { Pen } from "lucide-react";
import React from "react";

const ButtonSeeEditMode = ({ setState }: { setState: BoolSetter }) => {
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

export default ButtonSeeEditMode;
