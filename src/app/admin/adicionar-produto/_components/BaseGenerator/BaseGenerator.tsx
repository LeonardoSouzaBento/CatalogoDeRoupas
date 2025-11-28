"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts";
import { HeaderCard } from "@/app/loja/_ui";
import CardWrapper from "@/app/loja/_ui/CardWrapper";
import { clothingCatsSubcats } from "@/data/clothingData/clothingCatsSubcats";
import { patterns } from "@/data/clothingData/patterns";
import { prints } from "@/data/clothingData/prints";
import {
  BasicClothingInformation,
  ClothingProperty,
  Genders,
} from "@/types/types";
import AddedProperties from "./components/AddedProperties";
import Properties from "./components/Properties";
import PropertyOptions from "./components/PropertyOptions";

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

  const properties: ClothingProperty[] = [
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
    <CardWrapper>
      <HeaderCard
        wrapperStyles="border-none mb-0!"
        wrapperTitleStyles="gap-[5px]!"
        title="Informações básicas"
        subtitle="Selecione as caracteristicas principais (ou escolha uma roupa básica)"
        icon="edit_note"
        iconStyles="font-medium!"
      />

      <Properties
        properties={properties}
        propSelected={propSelected}
        setPropSelected={setPropSelected}
      />

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
    </CardWrapper>
  );
};

export default BaseGenerator;
