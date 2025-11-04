"use client";
import React, { useState } from "react";
import type { MainCategoriesData, ProviderType } from "@localtypes/types";
import { HomeContext } from "../HomeContext";
import { defaultMainCategoriesData } from "@data/home/homeData";

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
  /* Para conteudo que não precisa ser cadastrado */
  const [hasClothes, setHasClothes] = useState<boolean>(true);
  const [hasMainCategories, setHasMainCategories] = useState<boolean>(true); //no caso de crianças

  return (
    <HomeContext.Provider
      value={{
        homeEditMode,
        scrollLimitSpecialSelections,
        mainCategories,
        hasClothes,
        hasMainCategories, 
        setHasMainCategories, 
        setHasClothes,
        setHomeEditMode,
        setScrollLimitSpecialSelections,
        setMainCategories,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
