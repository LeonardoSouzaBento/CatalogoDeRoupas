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
      onClick={() => {
        setSeeEmailForm(true);
      }}
    >
      <Icon Svg={Mail} />
      Login com email
    </Button>
  );
};

export { ButtonLoginEmail };
