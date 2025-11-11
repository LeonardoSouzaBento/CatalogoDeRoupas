"use client";
import { X } from "lucide-react";
import { iconSmStyles } from "@/app/lucideIconStyles";

const css = {
  wrapperButtons: `flex flex-wrap gap-4 mb-5`,
  button: `h-9 br-50 light-button font-normal px-5 hover:bg-gray-100 hover:border-gray-400
    focus:outline-none focus:ring-2 focus:ring-blue-400
    transition-all duration-150`,
  selected: `font-normal outline-none ring-2 ring-blue-400`,
};

interface ButtonProps {
  clothes: string[];
  selectedName: string;
  setSelectedName: (value: string) => void;
}

const BaseClothingOptions = ({ clothes, selectedName, setSelectedName }: ButtonProps) => {
  return (
    <div className={css.wrapperButtons}>
      {clothes.map((item, index) => {
        const shortName = item.split("–")[0].trim();

        return (
          <button
            key={index}
            className={`${css.button} ${
              selectedName === item && css.selected
            } ${selectedName === item && "pl-[3px]"}`}
            onClick={() => setSelectedName(item)}
          >
            {selectedName === item && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedName("");
                }}
                className={`h-8 w-8 flex px-0 items-center justify-center 
                br-50 bg-red-600/70`}
              >
                <X {...iconSmStyles} color="white"/>
              </button>
            )}
            {shortName}
          </button>
        );
      })}
    </div>
  );
};

export default BaseClothingOptions;
