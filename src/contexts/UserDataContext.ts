import { createContext } from "react";
import type { StateSetter, UserData } from "@localtypes/types";

/* Dados padrão */
export const defaultUserData: UserData = {
  name: "",
  email: "",
  sex: "",
  position: "",
};

/* Contexto */
export interface UserDataContextType {
  userData: UserData;
  setUserData: StateSetter<UserData>;
}

export const UserDataContext = createContext<UserDataContextType>({
  userData: defaultUserData,
  setUserData: () => {},
});
