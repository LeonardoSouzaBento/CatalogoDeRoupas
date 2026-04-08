"use client";

import { Button, Icon } from "@/components/ui";
import type { BooleanSetter } from "@/types/types";
import { Mail } from "lucide-react";

const ButtonLoginEmail = ({
  setSeeEmailForm,
}: {
  seeEmailForm: boolean;
  setSeeEmailForm: BooleanSetter;
}) => {
  return (
    <Button
      variant="ghost"
      className="w-full transition-all group rounded-lg"
      onClick={() => {
        setSeeEmailForm(true);
      }}
    >
      <Icon Svg={Mail} size="md" className="text-neutral-400 group-hover:text-neutral-600 transition-colors shadow-xs" />
      Login com email
    </Button>
  );
};

export { ButtonLoginEmail };

