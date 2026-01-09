import { iconMd } from "@/app/styles/lucideIconStyles";
import { BooleanSetter, Photo } from "@/types/types";
import { Layers2, X } from "lucide-react";

const css = {
  button: `light-button j-center`,
  reorderMode: `bg-white! text-blue-700 ring ring-blue-300 shadow-sm`,
};

interface Props {
  styles?: string;
  reorderMode: boolean;
  setReorderMode: BooleanSetter;
  photos: Photo[];
}

const ReorderButton = ({
  reorderMode,
  setReorderMode,
  styles,
  photos,
}: Props) => {
  const nonEmptyCount = photos.filter((p) => p.url?.trim() !== "").length;
  const isDisabled = nonEmptyCount < 2;

  function handleActiveReorderMode() {
    if (!isDisabled) {
      setReorderMode(!reorderMode);
    }
  }

  return (
    <button
      disabled={isDisabled}
      onClick={handleActiveReorderMode}
      className={`
        ${css.button} 
        ${styles} 
        ${reorderMode && css.reorderMode}
        ${isDisabled ? "text-neutral-400 cursor-not-allowed" : ""}
      `}
    >
      {reorderMode ? "Sair de reordenar" : "Reordenar imagens"}

      <div className="wrapper-icon">
        {reorderMode ? (
          <X {...iconMd} />
        ) : (
          <Layers2 {...iconMd} color={isDisabled ? "#a1a1a1" : "gray"} />
        )}
      </div>
    </button>
  );
};

export default ReorderButton;
