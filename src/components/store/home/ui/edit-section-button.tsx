import type { ButtonVariants } from "@/components/ui/button";
import { Button, Icon } from "@/components/ui";
import { cn } from "@/utils/utils";
import type { BooleanSetter } from "@/types/types";
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
        size={"icon"}
        variant={(variant as ButtonVariants["variant"]) || "default"}
        className={cn("mb-1.5", className)}
        onClick={() => {
          setEditMode((prev) => !prev);
        }}
      >
        <Icon Svg={editMode ? PenOff : PenLine} fill="currentColor" size="sm" />
      </Button>
    </div>
  );
};

export { EditSectionButton };
