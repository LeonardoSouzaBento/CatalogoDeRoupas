import { useLocalStorage } from "@/hooks/UseLocalStorage";
import type { ProviderType } from "@localtypes/types";
import React from "react";
import { AdminContext } from "../AdminContext";

export const AdminProvider: React.FC<ProviderType> = ({ children }) => {
  const [blobUrls , setBlobUrls ] = useLocalStorage("blobUrls", [""]);

  return (
    <AdminContext.Provider
      value={{
        blobUrls , setBlobUrls
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};