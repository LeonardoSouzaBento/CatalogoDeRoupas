import { iconMdStyles } from "@/app/lucideIconStyles";
import { BooleanSetter } from "@/types/types";
import { Layers2, X } from "lucide-react";
import React from "react";

const css = {
  button: `light-button j-center`,
  reorderMode: `bg-white! text-blue-700 ring ring-blue-300`,
};

interface Props {
  styles?: string;
  reorderMode: boolean;
  setReorderMode: BooleanSetter;
}

const ReorderButton = ({ reorderMode, setReorderMode, styles }: Props) => {
  return (
    <button
      className={`${css.button} ${styles} ${
        reorderMode && css.reorderMode
      }`}
      onClick={() => setReorderMode(!reorderMode)}
    >
      {reorderMode ? "Sair de reordenar" : "Reordenar imagens"}
      <div className={`wrapper-icon`}>
        {reorderMode ? (
          <X {...iconMdStyles} color="blue" />
        ) : (
          <Layers2 {...iconMdStyles} />
        )}
      </div>
    </button>
  );
};

export default ReorderButton;
