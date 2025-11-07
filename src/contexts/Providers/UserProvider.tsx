"use client";
import React, { useState } from "react";
import { useLocalStorage } from "@/hooks/UseLocalStorage";
import type {
  ProviderType,
  UserData,
  ChildrensGenre,
  GenderKey,
} from "@/types/types";
import { defaultUserData } from "@/data/UserData";
import { UserContext } from "../UserContext";

export const UserProvider: React.FC<ProviderType> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  /* Generos do usuário */
  const [selectedGender, setSelectedGender] = useLocalStorage(
    "selectedGender",
    "masculino" as GenderKey
  );
  const [selectedChildGender, setSelectedChildGender] = useLocalStorage(
    "selectedChildGender",
    "masculino" as ChildrensGenre
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        /*  */
        searchTerm,
        setSearchTerm,
        /*  */
        selectedGender,
        selectedChildGender,
        setSelectedGender,
        setSelectedChildGender,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
