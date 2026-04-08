"use client";
import { PublicDataContext } from "@/contexts";
import { defaultShopInfo } from "@/data/home/publicData";
import type { ProviderType, ShopInfo, StateSetter } from "@/types/types";
import React, { useState } from "react";

export const PublicDataProvider: React.FC<ProviderType> = ({ children }) => {
  const [shopInfo, setShopInfo] = useState<ShopInfo>(defaultShopInfo);
  return (
    <PublicDataContext.Provider value={{ shopInfo, setShopInfo }}>
      {children}
    </PublicDataContext.Provider>
  );
};

export interface PublicDataContextType {
  shopInfo: ShopInfo;
  setShopInfo: StateSetter<ShopInfo>;
}
