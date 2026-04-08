import { Separator } from "@/components/ui";
import { useUserContext } from "@/contexts/index";
import { clothingCatsSubcats } from "@/data/clothings/clothingCatsSubcats";
import { modelings } from "@/data/clothings/modelings";
import { patterns } from "@/data/clothings/patterns";
import { prints } from "@/data/clothings/prints";
import type {
  BasicClothingInformation,
  ClothingProperty,
  Gender
} from "@/types/types";
import { useEffect, useState } from "react";
import { ProductBasesList } from "../product-base-list";
import { AddedProperties } from "./added-properties";
import { Properties } from "./properties";

const BaseGenCore = () => {
  const { selectedGender, setSelectedGender } = useUserContext();
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
        if (option !== "unisex") setSelectedGender(option as Gender);
        updates.gender = option as Gender;
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
    { name: "Modelagem", options: modelings.map((modeling) => modeling.name) },
    { name: "Nome" },
  ];

  useEffect(() => {
    if (basicInformation.cat) {
      setCurrentSubcats(
        clothingCatsSubcats[currentGender][basicInformation.cat],
      );
    }
  }, [basicInformation.cat, currentGender]);
  
  return (
    <>
      <Properties
        properties={properties}
        propSelected={propSelected}
        setPropSelected={setPropSelected}
        basicInformation={basicInformation}
        handleSelectOption={handleSelectOption}
      />

      <AddedProperties
        basicInformation={basicInformation}
        setBasicInformation={setBasicInformation}
      />

      <Separator className="my-5" />

      <ProductBasesList />
    </>
  );
};

export { BaseGenCore };
