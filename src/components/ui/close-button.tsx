import type { StateSetter } from "@/types/types";
import { X } from "lucide-react";
import { Button } from "./button";
import { Icon } from "./lucide-icon";
import { cn } from "@/lib/utils";

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
  size = "icon",
  iconSize,
}: CloseButtonProps) => {
  return (
    <Button
      size={size}
      variant={variant}
      className={cn(
        "rounded-full bg-primary-50 hover:bg-primary-100",
        className,
      )}
      onClick={() => setState(false)}
    >
      <Icon Svg={X} size={iconSize || "lg"} />
    </Button>
  );
};

export { CloseButton };
