"use client";
import { ChevronDown } from "lucide-react";
import { iconMd } from "@/app/styles/lucideIconStyles";
import { ClothingProperty, StateSetter } from "@/types/types";
import Button from "@/app/loja/_ui/button";
import WrapperButtons from "@/app/admin/_ui/wrapper-buttons";

const css = {
  wrapper: `
    flex flex-wrap gap-4 mt-0.5 mb-[20.1px] bs p-5 py-5.5
  `,
  button: `p175 br-50 relative light-button gap-0 font-normal pl-5 
  pr-0 text-gray-700 hover:bg-gray-100 transition-all 
  duration-150 border border-transparent
  `,
};

interface Props {
  properties: ClothingProperty[];
  propSelected: string | null;
  setPropSelected: StateSetter<string | null>;
}

const Properties = ({ properties, propSelected, setPropSelected }: Props) => {
  return (
    <WrapperButtons styles="mb-5 bs">
      {properties.slice(0, -1).map((item) => (
        <Button
          key={item.name}
          variant="optionList"
          selected={propSelected === item.name}
          onClick={() => {
            setPropSelected(item.name);
          }}
          icon={<ChevronDown {...iconMd} />}
        >
          {item.name}
        </Button>
      ))}
    </WrapperButtons>
  );
};

export default Properties;
