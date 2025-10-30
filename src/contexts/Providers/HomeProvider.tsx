"use client";
import React, { useState } from "react";
import type {
  MainCategoriesData,
  ProviderType,
  SpecialClothing,
} from "@localtypes/types";
import { HomeContext } from "../HomeContext";
import { defaultMainCategoriesData } from "@data/home/homeData";
import {
  specialMensClothingData,
  specialWomensClothingData,
  specialBoysClothingData,
  specialGirlsClothingData,
} from "@/data/home/homeData";

export const HomeDataProvider: React.FC<ProviderType> = ({ children }) => {
  // Home em modo de edição
  const [homeEditMode, setHomeEditMode] = useState<boolean>(false);
  /* Categorias principais */
  const [mainCategories, setMainCategories] = useState<MainCategoriesData>(
    defaultMainCategoriesData
  );
  /* Limite de scroll */
  const [scrollLimitSpecialSelections, setScrollLimitSpecialSelections] =
    useState<number>(0);
  /* Seleções especiais */
  const [specialMensClothing, setSpecialMensClothing] = useState<
    SpecialClothing[]
  >(specialMensClothingData);
  const [specialWomensClothing, setSpecialWomensClothing] = useState<
    SpecialClothing[]
  >(specialWomensClothingData);
  const [specialBoysClothes, setSpecialBoysClothes] = useState<
    SpecialClothing[]
  >(specialBoysClothingData);
  const [specialGirlsClothes, setSpecialGirlsClothes] = useState<
    SpecialClothing[]
  >(specialGirlsClothingData);

  return (
    <HomeContext.Provider
      value={{
        homeEditMode,
        scrollLimitSpecialSelections,
        mainCategories,
        setHomeEditMode,
        setScrollLimitSpecialSelections,
        setMainCategories,
        /*  */
        specialMensClothing,
        specialWomensClothing,
        specialBoysClothes,
        specialGirlsClothes,
        setSpecialMensClothing,
        setSpecialWomensClothing,
        setSpecialBoysClothes,
        setSpecialGirlsClothes,
        /*  */
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
