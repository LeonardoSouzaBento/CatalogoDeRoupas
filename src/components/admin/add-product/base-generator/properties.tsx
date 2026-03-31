"use client";
import { ChevronDown } from "lucide-react";

import { ButtonsWrapper, Icon } from "@/components/ui";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type {
  BasicClothingInformation,
  ClothingProperty,
  StateSetter,
} from "@/types/types";
import { PropertyOptions } from "./property-options";

interface Props {
  properties: ClothingProperty[];
  propSelected: string | null;
  setPropSelected: StateSetter<string | null>;
  basicInformation: BasicClothingInformation;
  handleSelectOption: (prop: string, option: string) => void;
}

const Properties = ({
  properties,
  propSelected,
  setPropSelected,
  basicInformation,
  handleSelectOption,
}: Props) => {
  return (
    <ButtonsWrapper className="mb-5" >
      {properties.slice(0, -1).map((item) => (
        <Popover
          key={item.name}
          open={propSelected === item.name}
          onOpenChange={(open) => {
            if (!open) setPropSelected(null);
          }}
        >
          <PopoverTrigger asChild>
            <Button
              data-option
              size="sm"
              variant={"ghost"}
              onClick={() => {
                setPropSelected(item.name);
              }}
            >
              {item.name}
              <Icon
                Svg={ChevronDown}
                size="lg"
                strokeWidth="extralight"
                className="mt-px"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-80 h-auto max-h-100 overflow-y-scroll p-0 rounded-lg"
            align="start"
          >
            <PropertyOptions
              properties={properties}
              propSelected={item.name}
              basicInformation={basicInformation}
              handleSelectOption={handleSelectOption}
            />
          </PopoverContent>
        </Popover>
      ))}
    </ButtonsWrapper>
  );
};

export { Properties };

