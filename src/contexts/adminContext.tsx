"use client"

import React from "react";
import { AdminContext } from "./index";
import { useLocalStorage } from "@/hooks";
import type { StateSetter } from '@/types/types';

export interface AdminContextType {
  blobUrls: string[];
  setBlobUrls: StateSetter<string[]>;
}

export const AdminProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [blobUrls, setBlobUrls] = useLocalStorage("blobUrls", [""]);

  return (
    <AdminContext.Provider
      value={{
        blobUrls,
        setBlobUrls,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
