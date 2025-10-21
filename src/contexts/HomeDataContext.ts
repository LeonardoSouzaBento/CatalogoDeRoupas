import { createContext } from "react";
import type {
  SpecialSelectionSchema,
  UserCategory,
  MainCategoriesData,
  GenderKey,
  ChildGenders,
} from "@localtypes/types";
import {
  defaultMensSpecialSelections,
  defaultFemaleSpecialSelections,
  defaultUserCategoriesData,
  defaultMainCategoriesData,
  defaultFChildSpecialSelections,
} from "@data/home/homeData";

interface HomeDataContextType {
  selectedGender: GenderKey;
  setSelectedGender: React.Dispatch<React.SetStateAction<GenderKey>>;
  userCategories: UserCategory[];
  setUserCategories: React.Dispatch<React.SetStateAction<UserCategory[]>>;
  selectedChildGender: ChildGenders;
  setSelectedChildGender: React.Dispatch<React.SetStateAction<ChildGenders>>;
  scrollLimitSpecialSelections: number;
  setScrollLimitSpecialSelections: React.Dispatch<React.SetStateAction<number>>;
  mensSpecialSelections: SpecialSelectionSchema[];
  setMensSpecialSelections: React.Dispatch<
    React.SetStateAction<SpecialSelectionSchema[]>
  >;
  femaleSpecialSelections: SpecialSelectionSchema[];
  setFemaleSpecialSelections: React.Dispatch<
    React.SetStateAction<SpecialSelectionSchema[]>
  >;
  femaleChildSpecialSelections: SpecialSelectionSchema[];
  setFemaleChildSpecialSelections: React.Dispatch<
    React.SetStateAction<SpecialSelectionSchema[]>
  >;
  maleChildSpecialSelections: SpecialSelectionSchema[];
  setMaleChildSpecialSelections: React.Dispatch<
    React.SetStateAction<SpecialSelectionSchema[]>
  >;
  mainCategories: MainCategoriesData;
  setMainCategories: React.Dispatch<React.SetStateAction<MainCategoriesData>>;
  homeEditMode: boolean;
  setHomeEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HomeDataContext = createContext<HomeDataContextType>({
  selectedGender: "masculino",
  setSelectedGender: () => {},
  userCategories: defaultUserCategoriesData,
  setUserCategories: () => {},
  selectedChildGender: "masculino",
  setSelectedChildGender: () => {},
  scrollLimitSpecialSelections: 0,
  setScrollLimitSpecialSelections: () => {},
  mensSpecialSelections: defaultMensSpecialSelections,
  setMensSpecialSelections: () => {},
  femaleSpecialSelections: defaultFemaleSpecialSelections,
  femaleChildSpecialSelections: defaultFChildSpecialSelections,
  setFemaleChildSpecialSelections: () => {},
  maleChildSpecialSelections: defaultFChildSpecialSelections,
  setMaleChildSpecialSelections: () => {},
  setFemaleSpecialSelections: () => {},
  mainCategories: defaultMainCategoriesData,
  setMainCategories: () => {},
  homeEditMode: false,
  setHomeEditMode: () => {},
});
