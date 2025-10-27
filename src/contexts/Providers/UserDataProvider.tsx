"use client";
import React, { useState } from "react";
import type { ProviderType } from "@/types/types";
import type { UserData } from "@/types/types";
import { defaultUserData } from "../UserDataContext";
import { UserDataContext } from "../UserDataContext";

export const UserDataProvider : React.FC<ProviderType> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(defaultUserData);

  return (
    <UserDataContext.Provider
      value={{ userData, setUserData}}
    >
      {children}
    </UserDataContext.Provider>
  );
};
