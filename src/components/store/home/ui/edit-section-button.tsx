import { Button, Icon } from "@/components/ui";
import type { ButtonVariants } from "@/components/ui/button";
import type { BooleanSetter } from "@/types/types";
import { cn } from "@/utils/utils";
import { PenLine, PenOff } from "lucide-react";

interface Props {
  editMode: boolean | undefined;
  setEditMode: BooleanSetter;
  className?: string;
  variant?: string;
}

const EditSectionButton = ({
  editMode,
  setEditMode,
  className,
  variant,
}: Props) => {
  return (
    <div className="w-full h-max flex justify-center">
      <Button
        size={"sm"}
        data-round
        variant={(variant as ButtonVariants["variant"]) || "outline"}
        className={cn("mb-1.5", className)}
        onClick={() => {
          setEditMode((prev) => !prev);
        }}
      >
        <Icon Svg={editMode ? PenOff : PenLine} size="md" />
        {editMode ? "Parar de editar" : "Editar seção"}
      </Button>
    </div>
  );
};

export { EditSectionButton };

