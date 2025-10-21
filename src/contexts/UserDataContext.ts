import { createContext } from "react";
import type { UserData } from "@localtypes/types";

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
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export const UserDataContext = createContext<UserDataContextType>({
  userData: defaultUserData,
  setUserData: () => {},
});
