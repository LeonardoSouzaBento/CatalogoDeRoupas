"use client"
import { defaultUserData } from "@/data/UserData";
import type {
  ChildrensGenre,
  GenderKey,
  StateSetter,
  UserData
} from "@localtypes/types";
import { createContext } from "react";

export interface UserContextType {
  userData: UserData;
  setUserData: StateSetter<UserData>;
  /* Gêneros do usuário */
  selectedGender: GenderKey;
  selectedChildGender: ChildrensGenre;
  setSelectedGender: StateSetter<GenderKey>;
  setSelectedChildGender: StateSetter<ChildrensGenre>;
}

export const UserContext = createContext<UserContextType>({
  userData: defaultUserData,
  setUserData: () => {},
  /* Genêros de usuario */
  selectedGender: "masculino",
  selectedChildGender: "masculino",
  setSelectedGender: () => {},
  setSelectedChildGender: () => {},
});
