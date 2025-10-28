"use client";
import React, { useState } from "react";
import type {
  ProviderType,
  SpecialSelectionSchema,
  UserCategory,
  MainCategoriesData,
  ChildGenders,
  GenderKey,
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
import { useLocalStorage } from "@/hooks/UseLocalStorage";

export const HomeDataProvider: React.FC<ProviderType> = ({ children }) => {
  // modo de edição
  const [editMode, setEditMode] = useState<boolean>(false);
  // gênero do usuário
  const [selectedGender, setSelectedGender] = useLocalStorage(
    "selectedGender",
    "masculino" as GenderKey
  );

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

  const [selectedChildGender, setSelectedChildGender] = useLocalStorage(
    "selectedChildGender",
    "masculino" as ChildGenders
  );

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
        editMode,
        setEditMode,
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
