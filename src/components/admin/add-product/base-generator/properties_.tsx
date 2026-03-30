"use client";
import { ChevronDown } from "lucide-react";

import { ButtonsWrapper, Icon } from "@/components/ui";
import { Button } from "@/components/ui/button";
import type { ClothingProperty, StateSetter } from "@/types/types";

interface Props {
  properties: ClothingProperty[];
  propSelected: string | null;
  setPropSelected: StateSetter<string | null>;
}

const Properties = ({ properties, propSelected, setPropSelected }: Props) => {
  return (
    <ButtonsWrapper className="mb-5">
      {properties.slice(0, -1).map((item) => (
        <Button
          key={item.name}
          selected={propSelected === item.name}
          variant={propSelected === item.name ? "outline" : "ghost"}
          onClick={() => {
            setPropSelected(item.name);
          }}
        >
          {item.name}
          <Icon Svg={ChevronDown} size="lg" />
        </Button>
      ))}
    </ButtonsWrapper>
  );
};

export { Properties };
