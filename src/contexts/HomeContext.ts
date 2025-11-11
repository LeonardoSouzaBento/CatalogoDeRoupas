"use client";
import { createContext } from "react";
import type {
  MainCategories,
  StateSetter,
} from "@localtypes/types";
import { defaultMainCategories } from "@data/home/homeData";


interface HomeContextType {
  hasGymClothes: boolean;
  hasMainCategories: boolean;
  homeEditMode: boolean;
  scrollLimitSpecialSelections: number;
  mainCategories: MainCategories;
  setHasGymClothes: React.Dispatch<React.SetStateAction<boolean>>;
  setHasMainCategories: React.Dispatch<React.SetStateAction<boolean>>;
  setHomeEditMode: StateSetter<boolean>;
  setScrollLimitSpecialSelections: StateSetter<number>;
  setMainCategories: StateSetter<MainCategories>;
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
