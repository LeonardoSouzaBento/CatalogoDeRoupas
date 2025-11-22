"use client";
import React, { useState } from "react";
import type { MainCategoriesType, ProviderType } from "@localtypes/types";
import { HomeContext } from "../HomeContext";
import { defaultMainCategories } from "@data/home/homeData";
import  useLocalStorage  from "@hooks/useLocalStorage";

export const HomeDataProvider: React.FC<ProviderType> = ({ children }) => {
  /* Home em modo de edição */
  const [homeEditMode, setHomeEditMode] = useLocalStorage(
    "homeEditMode",
    false
  );
  /* Categorias principais */
  const [mainCategories, setMainCategories] = useState<MainCategoriesType>(
    defaultMainCategories
  );
  /* Limite de scroll */
  const [scrollLimitSpecialSelections, setScrollLimitSpecialSelections] =
    useState<number>(0);
  /* Para conteudo que não precisa ser cadastrado */
  const [hasGymClothes, setHasGymClothes] = useState<boolean>(true);
  const [hasMainCategories, setHasMainCategories] = useState<boolean>(true); //no caso de crianças

  return (
    <HomeContext.Provider
      value={{
        homeEditMode,
        scrollLimitSpecialSelections,
        mainCategories,
        hasGymClothes,
        hasMainCategories,
        setHasMainCategories,
        setHasGymClothes,
        setHomeEditMode,
        setScrollLimitSpecialSelections,
        setMainCategories,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
