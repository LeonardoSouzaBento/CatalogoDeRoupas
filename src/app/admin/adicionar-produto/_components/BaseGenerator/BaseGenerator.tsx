"use client";
import { HeaderCard } from "@/app/loja/_ui";
import { iconMdStyles } from "@/app/lucideIconStyles";
import { UserContext } from "@/contexts";
import { clothingCatsSubcats } from "@/data/clothingData/clothingCatsSubcats";
import { patterns } from "@/data/clothingData/patterns";
import { Genders } from "@/types/types";
import { ChevronDown } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import PropertyOptions from "./components/PropertyOptions";

const css = {
  wrapper: `
    basic-card-style max-w-192 mx-auto transition-all duration-200
  `,
  wrapperButtons: `
    flex flex-wrap gap-4 mb-6
  `,
  button: `
    h-9 br-50 relative light-button font-normal text-gray-700
    hover:bg-gray-100 hover:border-gray-400
    focus:outline-none focus:ring-2 focus:ring-blue-400
    transition-all duration-150
  `,
  icon: `
    text-gray-600
  `,
};

const BaseGenerator = () => {
  const { selectedGender, setSelectedGender } = useContext(UserContext);
  const [propSelected, setPropSelected] = useState<string | null>(null);
  const [options, setOptions] = useState<string[]>([""]);
  const [catSelected, setCatSelected] = useState<string>("");
  const [subcats, setSubcats] = useState<string[] | null>([]);
  const [booleanOptionsSelected, setBooleanOptionsSelected] = useState<string[]>([]);

  /* gênero selecionado */
  const currentGender =
    selectedGender !== "unisex" && selectedGender === "masculino"
      ? "masculino"
      : "feminino";

  /* alternar opções booleanas */
  const toggleBoolean = (name: string) => {
    setBooleanOptionsSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  function handleSelectOption(prop: string, option: string) {
    if (prop === "Categoria") {
      setCatSelected(option);
    }
    if (prop === "Gênero") {
      setSelectedGender(option as Genders);
    }
  }

  const baseProperties = [
    { name: "Gênero", options: ["masculino", "feminino"] },
    {
      name: "Categoria",
      options: Object.keys(clothingCatsSubcats[currentGender]),
    },
    { name: "Subcategoria", options: subcats },
    { name: "Padrão de aparência principal", options: patterns },
    { name: "Nome" },
    { name: "É estampada", type: "boolean" },
    { name: "É Infantil", type: "boolean" },
  ];

  useEffect(() => {
    if (catSelected) {
      setSubcats(clothingCatsSubcats[currentGender][catSelected]);
    }
  }, [catSelected]);

  useEffect(() => {
    if (propSelected) {
      const property = baseProperties.find((item) => item.name === propSelected);
      if (property && property.options) {
        setOptions(property.options);
      } else {
        setOptions([]);
      }
    }
  }, [propSelected]);

  return (
    <div
      className={css.wrapper}
      onClick={() => setPropSelected(null)}
    >
      <HeaderCard
        title="Registre as informações básicas"
        subtitle="Recomendamos selecionar uma roupa básica"
        icon="edit_note"
        spanStyles="line-span text-[1.7em]! font-medium! mr-2"
      />

      <div className={css.wrapperButtons}>
        {baseProperties.map((item) => (
          <div key={item.name} className="relative group">
            <button
              className={css.button}
              onClick={(e) => {
                e.stopPropagation();
                setPropSelected((prev) => (prev === item.name ? null : item.name));
                if (item.type === "boolean") toggleBoolean(item.name);
              }}
            >
              {item.name}
              {item.options && (
                <ChevronDown className={css.icon} {...iconMdStyles} />
              )}
              {item.type === "boolean" && (
                <span
                  className={`material-symbols-outlined text-[1.08em]! font-[550]! text-gray-700`}
                >
                  {booleanOptionsSelected.includes(item.name)
                    ? "select_check_box"
                    : "check_box_outline_blank"}
                </span>
              )}
            </button>
          </div>
        ))}
      </div>

      <PropertyOptions
        hasOptions={!!(propSelected && options.length > 0)}
        options={options}
        propSelected={propSelected}
        handleSelectOption={handleSelectOption}
      />
    </div>
  );
};

export default BaseGenerator;
