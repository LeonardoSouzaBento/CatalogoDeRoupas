import { Button, ButtonProps } from "@/components/ui/button";
import type { BooleanSetter, Photo } from "@/types/types";
import { Layers2, X } from "lucide-react";

interface ReorderButtonProps extends ButtonProps {
  reorderMode: boolean;
  setReorderMode: BooleanSetter;
  photos: Photo[];
}

export const ReorderButton = ({
  reorderMode,
  setReorderMode,
  photos,
  ...props
}: ReorderButtonProps) => {
  const nonEmptyCount = photos.filter((p) => p.url?.trim() !== "").length;
  const isDisabled = nonEmptyCount < 2;

  function handleActiveReorderMode() {
    if (!isDisabled) {
      setReorderMode(!reorderMode);
    }
  }

  return (
    <Button
      disabled={isDisabled}
      onClick={handleActiveReorderMode}
      variant={reorderMode ? "default" : "outline"}
      {...props}
    >
      {reorderMode ? "Sair de reordenar" : "Reordenar imagens"}
      {reorderMode ? <X /> : <Layers2 size={18} />}
    </Button>
  );
};
