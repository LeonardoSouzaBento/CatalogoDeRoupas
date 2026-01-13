"use client";
import { useEffect, useState } from "react";
import { BasicClothingInformation, mappingPropToKey } from "@/types/types";
import WrapperOptions from "@/app/admin/_ui/wrapper-options";

const css = {
  container: `p-5 bs bg-white border-b-transparent rounded-br-none rounded-bl-none`,
  title: `text-blue-600 font-medium mb-4.5  tracking-wide uppercase leading-none!`,
  wrapperOptions: `flex flex-wrap gap-4`,
  optionButton: ` 
    px-5 rounded-full bs shadow-sm
    text-gray-800 font-normal bg-white
    hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600
    transition-all duration-150
    active:scale-95
  `,
  optionSelected: `ring-hover-style `,
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
    <WrapperOptions styles={css.container}>
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
    </WrapperOptions>
  );
};

export default PropertyOptions;
