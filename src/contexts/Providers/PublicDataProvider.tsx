import React, { useState } from "react";
import { PublicDataContext } from "@contexts/PublicDataContext";
import { defaultShopInfo } from "@src/data/home/publicData";
import type { ProviderType } from "@localtypes/types";
import type { ShopInfo } from "@localtypes/types";


export const PublicDataProvider: React.FC<ProviderType> = ({ children }) => {
  const [shopInfo, setShopInfo] = useState<ShopInfo>(defaultShopInfo);
  return (
    <PublicDataContext.Provider value={{shopInfo, setShopInfo}}>{children}</PublicDataContext.Provider>
  );
};