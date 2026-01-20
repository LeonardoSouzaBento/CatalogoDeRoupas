"use client";
import { createContext } from "react";
import type {
  MainCategoriesType,
  StateSetter,
} from "@/types/types";
import { defaultMainCategories } from "@/data/home/homeData";


interface HomeContextType {
  hasGymClothes: boolean;
  hasMainCategories: boolean;
  homeEditMode: boolean;
  scrollLimitSpecialSelections: number;
  mainCategories: MainCategoriesType;
  setHasGymClothes: React.Dispatch<React.SetStateAction<boolean>>;
  setHasMainCategories: React.Dispatch<React.SetStateAction<boolean>>;
  setHomeEditMode: StateSetter<boolean>;
  setScrollLimitSpecialSelections: StateSetter<number>;
  setMainCategories: StateSetter<MainCategoriesType>;
}

export const HomeContext = createContext<HomeContextType>({
  homeEditMode: false,
  mainCategories: defaultMainCategories,
  scrollLimitSpecialSelections: 0,
  hasGymClothes: true,
  hasMainCategories: true,
  setMainCategories: () => {},
  setHomeEditMode: () => {},
  setScrollLimitSpecialSelections: () => {},
  setHasGymClothes: () => {},
  setHasMainCategories: () => {},
});
