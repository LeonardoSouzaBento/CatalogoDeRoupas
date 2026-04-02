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
      data-round
      variant="ghost"
      className="w-full h-12 flex items-center justify-center gap-3 bg-white hover:bg-neutral-50 border-neutral-200 text-neutral-600 font-semibold transition-all group"
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

