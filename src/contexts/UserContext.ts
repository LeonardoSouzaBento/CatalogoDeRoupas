"use client";
import { defaultUserData } from "@/data/UserData";
import type {
  Genders,
  StateSetter,
  UserData
} from "@/types/types";
import { createContext } from "react";

export interface UserContextType {
  userData: UserData;
  setUserData: StateSetter<UserData>;
  /*  */
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  /* Gêneros do usuário */
  childCatSelected: boolean;
  setChildCatSelected: StateSetter<boolean>;
  selectedGender: Genders;
  setSelectedGender: StateSetter<Genders>;
}

export const UserContext = createContext<UserContextType>({
  userData: defaultUserData,
  setUserData: () => {},
  /*  */
  searchTerm: "",
  setSearchTerm: () => {},
  /* Genêros de usuario */
  childCatSelected: false,
  setChildCatSelected: () => {},
  selectedGender: "masculino",
  setSelectedGender: () => {},
});
