import { Button, Icon } from "@/components/ui";
import type { ButtonProps, ButtonVariants } from "@/components/ui/button";
import type { BooleanSetter } from "@/types/types";
import { cn } from "@/utils/utils";
import { PenLine, PenOff } from "lucide-react";

interface Props extends ButtonProps {
  editMode: boolean | undefined;
  setEditMode: BooleanSetter;
}

const EditSectionButton = ({
  editMode,
  setEditMode,
  className,
  variant,
  ...props
}: Props) => {
  return (
    <Button
      size={"sm"}
      data-round
      variant={(variant as ButtonVariants["variant"]) || "outline"}
      className={cn(className)}
      onClick={() => {
        setEditMode((prev) => !prev);
      }}
      {...props}
    >
      <Icon Svg={editMode ? PenOff : PenLine} size="md" />
      {editMode ? "Parar de editar" : "Editar seção"}
    </Button>
  );
};

export { EditSectionButton };
