"use client";
import { iconSm } from "@/app/styles/lucideIconStyles";
import { X } from "lucide-react";

const css = {
  wrapperButtons: `flex flex-wrap gap-4 mb-6`,
  button: `p175 br-50 light-button font-normal px-6 light-button hover:border-gray-400
    focus:outline-none focus:ring-2 focus:ring-blue-400
    transition-all duration-150 relative max-[400px]:w-full sm:min-w-60`,
  selected: `ring-style`,
  buttonDelete: `h-8 w-8 flex px-0 items-center justify-center 
  br-50 bg-white/60 hover:shadow-lg trans absolute right-1 bottom-1 [transition:_opacity_2s_ease]`,
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

            <span
              onClick={(e) => {
                e.stopPropagation();
                setSelectedName("");
              }}
              className={`${css.buttonDelete} ${
                selected ? "flex opacity-100" : "opacity-0! hidden!"
              }`}
            >
              <X {...iconSm} strokeWidth={2.3} />
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default BaseClothingOptions;
