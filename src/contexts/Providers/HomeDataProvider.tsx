import React, { useState, useEffect } from "react";
import type {
  ProviderType,
  SpecialSelectionSchema,
  UserCategory,
  MainCategoriesData,
  GenderKey,
  ChildGenders,
} from "@localtypes/types";
import { HomeDataContext } from "../HomeDataContext";
import {
  defaultMensSpecialSelections,
  defaultFemaleSpecialSelections,
  defaultMChildSpecialSelections,
  defaultFChildSpecialSelections,
  defaultUserCategoriesData,
  defaultMainCategoriesData,
} from "@data/home/homeData";

export const HomeDataProvider: React.FC<ProviderType> = ({ children }) => {
  //generos de usuario
  const [selectedGender, setSelectedGender] = useState<GenderKey>(() => {
    const stored = localStorage.getItem("selectedGender");
    return stored ? JSON.parse(stored) : "masculino";
  });
  useEffect(() => {
    localStorage.setItem("selectedGender", JSON.stringify(selectedGender));
  }, [selectedGender]);

  // Categorias do usuario para edição
  const [userCategories, setUserCategories] = useState<UserCategory[]>(
    defaultUserCategoriesData
  );
  // Limite de scroll
  const [scrollLimitSpecialSelections, setScrollLimitSpecialSelections] =
    useState<number>(0);

  // seleções especiasi masculina e feminina
  const [mensSpecialSelections, setMensSpecialSelections] = useState<
    SpecialSelectionSchema[]
  >(defaultMensSpecialSelections);

  const [femaleSpecialSelections, setFemaleSpecialSelections] = useState<
    SpecialSelectionSchema[]
  >(defaultFemaleSpecialSelections);

  const [selectedChildGender, setSelectedChildGender] =
    useState<ChildGenders>("masculino");

  const [maleChildSpecialSelections, setMaleChildSpecialSelections] = useState<
    SpecialSelectionSchema[]
  >(defaultMChildSpecialSelections);

  const [femaleChildSpecialSelections, setFemaleChildSpecialSelections] =
    useState<SpecialSelectionSchema[]>(defaultFChildSpecialSelections);

  //Categorias principais
  const [mainCategories, setMainCategories] = useState<MainCategoriesData>(
    defaultMainCategoriesData
  );

  // Home em modo de edição
  const [homeEditMode, setHomeEditMode] = useState<boolean>(false);

  return (
    <HomeDataContext.Provider
      value={{
        selectedGender,
        setSelectedGender,
        userCategories,
        setUserCategories,
        mensSpecialSelections,
        setMensSpecialSelections,
        femaleSpecialSelections,
        setFemaleSpecialSelections,
        selectedChildGender,
        setSelectedChildGender,
        maleChildSpecialSelections,
        setMaleChildSpecialSelections,
        femaleChildSpecialSelections,
        setFemaleChildSpecialSelections,
        scrollLimitSpecialSelections,
        setScrollLimitSpecialSelections,
        mainCategories,
        setMainCategories,
        homeEditMode,
        setHomeEditMode,
      }}
    >
      {children}
    </HomeDataContext.Provider>
  );
};
