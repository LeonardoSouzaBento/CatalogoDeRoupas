"use client";
import { createContext } from "react";
import type {
  MainCategoriesData,
  StateSetter,
  SpecialClothing,
} from "@localtypes/types";
import { defaultMainCategoriesData } from "@data/home/homeData";
import {
  specialMensClothingData,
  specialWomensClothingData,
  specialBoysClothingData,
  specialGirlsClothingData,
} from "@/data/home/homeData";

interface HomeContextType {
  homeEditMode: boolean;
  scrollLimitSpecialSelections: number;
  mainCategories: MainCategoriesData;
  setHomeEditMode: StateSetter<boolean>;
  setScrollLimitSpecialSelections: StateSetter<number>;
  setMainCategories: StateSetter<MainCategoriesData>;
  /* seleções especiais */
  specialMensClothing: SpecialClothing[];
  specialWomensClothing: SpecialClothing[];
  specialBoysClothes: SpecialClothing[];
  specialGirlsClothes: SpecialClothing[];
  setSpecialMensClothing: StateSetter<SpecialClothing[]>;
  setSpecialWomensClothing: StateSetter<SpecialClothing[]>;
  setSpecialBoysClothes: StateSetter<SpecialClothing[]>;
  setSpecialGirlsClothes: StateSetter<SpecialClothing[]>;
}

export const HomeContext = createContext<HomeContextType>({
  homeEditMode: false,
  mainCategories: defaultMainCategoriesData,
  scrollLimitSpecialSelections: 0,
  setMainCategories: () => {},
  setHomeEditMode: () => {},
  setScrollLimitSpecialSelections: () => {},
  /* Seleções especiais */
  specialMensClothing: specialMensClothingData,
  specialWomensClothing: specialWomensClothingData,
  specialBoysClothes: specialBoysClothingData,
  specialGirlsClothes: specialGirlsClothingData,
  setSpecialMensClothing: () => {},
  setSpecialWomensClothing: () => {},
  setSpecialBoysClothes: () => {},
  setSpecialGirlsClothes: () => {},
});
