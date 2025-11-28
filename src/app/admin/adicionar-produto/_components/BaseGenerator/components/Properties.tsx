"use client";
import { ChevronDown } from "lucide-react";
import { iconMd } from "@/app/lucideIconStyles";
import { ClothingProperty, StateSetter } from "@/types/types";

const css = {
  wrapper: `
    flex flex-wrap gap-4 mt-0.5 mb-[20.1px] bs p-5 py-5.5
  `,
  button: `text-[1.00em] br-50 relative light-button gap-0 font-normal pl-5 
  pr-0 text-gray-700 hover:bg-gray-100 transition-all 
  duration-150 tetx-[1.00em]! border border-transparent
  `,
  selected: `bg-white border border-gray-300! shadow-soft-soft hover:shadow-soft`,
  icon: `
    text-gray-600 mr-1
  `,
};

interface Props {
  properties: ClothingProperty[];
  propSelected: string | null;
  setPropSelected: StateSetter<string | null>;
}

const Properties = ({
  properties,
  propSelected,
  setPropSelected,
}: Props) => {
  return (
    <div className={css.wrapper}>
      {properties.slice(0, -1).map((item) => (
        <button
          key={item.name}
          className={`${css.button} ${
            propSelected === item.name && css.selected
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setPropSelected(item.name);
          }}
        >
          {item.name}

          <div className={`h-full w-12 box-border centralize`}>
            <ChevronDown className={css.icon} {...iconMd} />
          </div>
        </button>
      ))}
    </div>
  );
};

export default Properties;
