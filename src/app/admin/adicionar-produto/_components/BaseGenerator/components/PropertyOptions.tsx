"use client";

import { useEffect, useState } from "react";
import { BasicClothingInformation, mappingPropToKey } from "@/types/types";

const css = {
  container: `bg-white bs-light br-lg px-5 pt-4 pb-6 mb-4`,
  title: `text-blue-600 font-semibold mb-3 tracking-wide`,
  wrapperOptions: `flex flex-wrap gap-5`,
  optionButton: `
    px-5 rounded-full bs-light shadow-soft-soft
    text-gray-800 font-normal bg-white
    hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600
    focus:ring-2 focus:ring-blue-300 focus:outline-none
    transition-all duration-150
    active:scale-95
  `,
  optionSelected: `ring-style `,
};

interface Property {
  name: string;
  options?: string[];
}

interface PropertyOptionsProps {
  properties: Property[];
  propSelected: string | null;
  handleSelectOption: (prop: string, option: string) => void;
  basicInformation: BasicClothingInformation;
}

const PropertyOptions = ({
  properties,
  propSelected,
  basicInformation,
  handleSelectOption,
}: PropertyOptionsProps) => {
  // converte o nome mostrado no botão para a chave do estado
  const key = propSelected ? mappingPropToKey[propSelected] : undefined;

  const [options, setOptions] = useState<string[]>([""]);

  useEffect(() => {
    if (propSelected) {
      const property = properties.find((item) => item.name === propSelected);
      if (property && property.options) {
        setOptions(property.options);
      } else {
        setOptions([]);
      }
    }
  }, [propSelected]);

  return (
    <div className={css.container} onClick={(e) => e.stopPropagation()}>
      <p className={css.title}>Selecione</p>

      <div className={css.wrapperOptions}>
        {options.map((option) => {
          const isSelected =
            key &&
            basicInformation[key]?.toString().toLowerCase() ===
              option.toLowerCase();

          return (
            <button
              key={option}
              className={`
                  ${css.optionButton}
                  ${isSelected ? css.optionSelected : ""}
                `}
              onClick={() =>
                propSelected && handleSelectOption(propSelected, option)
              }
            >
              {option}
            </button>
          );
        })}
        {propSelected === "Subcategoria" && options.length === 0 && (
          <p>Selecione uma categoria primeiro.</p>
        )}
      </div>
    </div>
  );
};

export default PropertyOptions;
