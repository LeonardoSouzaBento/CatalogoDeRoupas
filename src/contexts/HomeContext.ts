"use client";
import { createContext } from "react";
import type {
  MainCategoriesData,
  StateSetter,
} from "@localtypes/types";
import { defaultMainCategoriesData } from "@data/home/homeData";


interface HomeContextType {
  hasGymClothes: boolean;
  hasMainCategories: boolean;
  homeEditMode: boolean;
  scrollLimitSpecialSelections: number;
  mainCategories: MainCategoriesData;
  setHasGymClothes: React.Dispatch<React.SetStateAction<boolean>>;
  setHasMainCategories: React.Dispatch<React.SetStateAction<boolean>>;
  setHomeEditMode: StateSetter<boolean>;
  setScrollLimitSpecialSelections: StateSetter<number>;
  setMainCategories: StateSetter<MainCategoriesData>;
}

export const HomeContext = createContext<HomeContextType>({
  homeEditMode: false,
  mainCategories: defaultMainCategoriesData,
  scrollLimitSpecialSelections: 0,
  hasGymClothes: true,
  hasMainCategories: true,
  setMainCategories: () => {},
  setHomeEditMode: () => {},
  setScrollLimitSpecialSelections: () => {},
  setHasGymClothes: () => {},
  setHasMainCategories: () => {},
});
