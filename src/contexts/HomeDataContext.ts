import { createContext } from "react";
import type {
  SpecialSelectionSchema,
  UserCategory,
  MainCategoriesData,
  GenderKey,
  ChildGenders,
  StateSetter,
} from "@localtypes/types";
import {
  defaultMensSpecialSelections,
  defaultFemaleSpecialSelections,
  defaultUserCategoriesData,
  defaultMainCategoriesData,
  defaultFChildSpecialSelections,
} from "@data/home/homeData";

interface HomeDataContextType {
  editMode: boolean;
  setEditMode: StateSetter<boolean>;
  // Gênero do usuário
  selectedGender: GenderKey;
  setSelectedGender: StateSetter<GenderKey>;
  // Categórias
  userCategories: UserCategory[];
  setUserCategories: StateSetter<UserCategory[]>;
  // Gênero infantil
  selectedChildGender: ChildGenders;
  setSelectedChildGender: StateSetter<ChildGenders>;
  // Limite de rolagem para seleções especiais
  scrollLimitSpecialSelections: number;
  setScrollLimitSpecialSelections: StateSetter<number>;
  //
  mensSpecialSelections: SpecialSelectionSchema[];
  setMensSpecialSelections: StateSetter<SpecialSelectionSchema[]>;
  //
  femaleSpecialSelections: SpecialSelectionSchema[];
  setFemaleSpecialSelections: StateSetter<SpecialSelectionSchema[]>;
  //
  femaleChildSpecialSelections: SpecialSelectionSchema[];
  setFemaleChildSpecialSelections: StateSetter<SpecialSelectionSchema[]>;
  //
  maleChildSpecialSelections: SpecialSelectionSchema[];
  setMaleChildSpecialSelections: StateSetter<SpecialSelectionSchema[]>;
  //
  mainCategories: MainCategoriesData;
  setMainCategories: StateSetter<MainCategoriesData>;
  //
  homeEditMode: boolean;
  setHomeEditMode: StateSetter<boolean>;
}

export const HomeDataContext = createContext<HomeDataContextType>({
  editMode: false,
  setEditMode: () => {},
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
