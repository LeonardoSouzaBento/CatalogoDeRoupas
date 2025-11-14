"use client";
import { X } from "lucide-react";
import { iconSmStyles } from "@/app/lucideIconStyles";

const css = {
  wrapperButtons: `flex flex-wrap gap-4 mb-6`,
  button: `br-50 light-button font-normal px-5 hover:bg-gray-100 hover:border-gray-400
    focus:outline-none focus:ring-2 focus:ring-blue-400
    transition-all duration-150 relative`,
  selected: `ring-style`,
  buttonDelete: `h-8 w-8 flex px-0 items-center justify-center 
  br-50 bg-white/90 hover:shadow-soft trans absolute right-1 top-1 [transition:_opacity_2s_ease]`,
};

interface ButtonProps {
  clothes: string[];
  selectedName: string;
  setSelectedName: (value: string) => void;
}

const BaseClothingOptions = ({
  clothes,
  selectedName,
  setSelectedName,
}: ButtonProps) => {
  return (
    <div className={css.wrapperButtons}>
      {clothes.map((item, index) => {
        const shortName = item.split("–")[0].trim();
        const selected = selectedName === item;

        return (
          <button
            key={index}
            className={`${css.button} ${selected && css.selected} ${
              selected && "pr-13"
            }`}
            onClick={() => setSelectedName(item)}
          >
            {shortName}

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedName("");
              }}
              className={`${css.buttonDelete} ${
                selected ? "flex opacity-100" : "opacity-0! hidden!"
              }`}
            >
              <X {...iconSmStyles} color="red" />
            </button>
          </button>
        );
      })}
    </div>
  );
};

export default BaseClothingOptions;
