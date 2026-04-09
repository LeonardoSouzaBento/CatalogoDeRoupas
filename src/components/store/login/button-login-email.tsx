"use client";

import { Button, Icon } from "@/components/ui";
import type { BooleanSetter } from "@/types/types";
import { Mail } from "lucide-react";
import { ButtonProps } from "@/components/ui";
import { cn } from "@/utils/utils";

interface ButtonLoginEmailProps extends ButtonProps {
  setSeeEmailForm: BooleanSetter;
}

const ButtonLoginEmail = ({
  setSeeEmailForm,
  className,
  ...props
}: ButtonLoginEmailProps) => {
  return (
    <Button
      variant="ghost"
      className={cn(className)}
      onClick={() => {
        setSeeEmailForm(true);
      }}
      {...props}
    >
      <Icon Svg={Mail} strokeWidth="medium" className="opacity-90" />
      Login com email
    </Button>
  );
};

export { ButtonLoginEmail };
