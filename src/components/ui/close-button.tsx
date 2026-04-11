import type { StateSetter } from "@/types/types";
import { X } from "lucide-react";
import { Button } from "./button";
import { Icon } from "./lucide-icon";

interface CloseButtonProps {
  setState: StateSetter<boolean>;
  className?: string;
  variant?: "transparent" | "secondary";
  size?: "icon" | "icon-lg" | "icon-sm";
  iconSize?: string;
}

const CloseButton = ({
  setState,
  className,
  variant = "secondary",
  size = "icon-sm",
  iconSize,
}: CloseButtonProps) => {
  return (
    <Button
      data-round
      size={size}
      variant={variant}
      className={className}
      onClick={() => setState(false)}
    >
      <Icon
        Svg={X}
        size={iconSize || "md"}
        strokeWidth="light"
        className="text-destructive"
      />
    </Button>
  );
};

export { CloseButton };
