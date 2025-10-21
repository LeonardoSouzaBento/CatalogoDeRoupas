import { createContext } from "react";
import type { ShopInfo } from "@src/types/types";
import { defaultShopInfo } from "@src/data/home/publicData";

export interface PublicDataContextType {
  shopInfo: ShopInfo;
  setShopInfo: React.Dispatch<React.SetStateAction<ShopInfo>>;
}

export const PublicDataContext = createContext<PublicDataContextType>({
  shopInfo: defaultShopInfo,
  setShopInfo: () => {},
});
