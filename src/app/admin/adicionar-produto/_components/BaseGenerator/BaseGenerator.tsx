"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts";
import { Genders, BasicClothingInformation } from "@/types/types";
import { HeaderCard } from "@/app/loja/_ui";
import { clothingCatsSubcats } from "@/data/clothingData/clothingCatsSubcats";
import { prints } from "@/data/clothingData/prints";
import { patterns } from "@/data/clothingData/patterns";
import PropertyOptions from "./components/PropertyOptions";
import AddedProperties from "./components/AddedProperties";
import { ChevronDown } from "lucide-react";
import { iconMdStyles } from "@/app/lucideIconStyles";

const css = {
  wrapper: `
    basic-card-style max-w-3xl lg:max-w-4xl mx-auto transition-all duration-200
  `,
  wrapperButtons: `
    flex flex-wrap gap-5 mb-5
  `,
  button: `
    br-50 relative light-button font-normal px-5 text-gray-700
    hover:bg-gray-100 transition-all duration-150
  `,
  selected: `bg-white! border-1 border-gray-300/90 shadow-soft-soft hover:shadow-soft`,
  icon: `
    text-gray-600
  `,
};

interface Property {
  name: string;
  options?: string[];
}

const BaseGenerator = () => {
  const { selectedGender, setSelectedGender } = useContext(UserContext);
  const [propSelected, setPropSelected] = useState<string | null>("Gênero");
  const [currentSubcats, setCurrentSubcats] = useState<string[] | null>([]);
  // const [name, setName] = useState<string>("");
  const [basicInformation, setBasicInformation] =
    useState<BasicClothingInformation>({
      gender: selectedGender,
      cat: "",
      subcat: "",
      pattern: "",
      modeling: "",
      name: "",
      print: "",
      is_childish: "",
    });

  /* gênero selecionado */
  const currentGender =
    selectedGender !== "unisex" && selectedGender === "masculino"
      ? "masculino"
      : "feminino";

  function handleSelectOption(prop: string, option: string) {
    const updates: Partial<typeof basicInformation> = {};

    switch (prop) {
      case "Gênero":
        if (option !== "unisex") setSelectedGender(option as Genders);
        updates.gender = option as Genders;
        break;
      case "Categoria":
        updates.cat = option;
        break;
      case "Subcategoria":
        updates.subcat = option;
        break;
      case "Padrão":
        updates.pattern = option;
        break;
      case "Estampa":
        updates.print = option;
        break;
      case "É Infantil":
        updates.is_childish = option;
        break;
    }

    if (Object.keys(updates).length > 0) {
      setBasicInformation({ ...basicInformation, ...updates });
    }
  }

  const properties: Property[] = [
    { name: "Gênero", options: ["masculino", "feminino", "unisex"] },
    {
      name: "Categoria",
      options: Object.keys(clothingCatsSubcats[currentGender]),
    },
    { name: "Subcategoria", options: currentSubcats ? currentSubcats : [] },
    { name: "Padrão", options: patterns },
    { name: "Estampa", options: prints },
    { name: "É Infantil", options: ["Sim", "Não"] },
    { name: "Nome" },
  ];

  useEffect(() => {
    if (basicInformation.cat) {
      setCurrentSubcats(
        clothingCatsSubcats[currentGender][basicInformation.cat]
      );
    }
  }, [basicInformation.cat, currentGender]);

  return (
    <div className={css.wrapper}>
      <HeaderCard
        title="Informações básicas"
        subtitle="Selecione as caracteristicas principais (ou escolha uma roupa básica)"
        icon="edit_note"
        spanStyles="line-span text-[1.7em]! font-medium! mr-2"
      />

      <div className={css.wrapperButtons}>
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

            <div>
              <ChevronDown className={css.icon} {...iconMdStyles} />
            </div>
          </button>
        ))}
      </div>

      <PropertyOptions
        properties={properties}
        propSelected={propSelected}
        basicInformation={basicInformation}
        handleSelectOption={handleSelectOption}
      />

      <AddedProperties
        basicInformation={basicInformation}
        setBasicInformation={setBasicInformation}
      />
    </div>
  );
};

export default BaseGenerator;
