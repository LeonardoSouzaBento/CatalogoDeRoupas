"use client";
import { useEffect, useState } from "react";
import { BasicClothingInformation, mappingPropToKey } from "@/types/types";

const css = {
  container: `bg-white bs p-5 mb-5`,
  title: `text-blue-600 font-medium mb-4.5 md-p tracking-wide uppercase leading-none!`,
  wrapperOptions: `flex flex-wrap gap-4`,
  optionButton: ` text-[1.00em]
    px-5 rounded-full bs shadow-soft-soft
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
