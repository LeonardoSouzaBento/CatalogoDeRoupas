import { createContext } from "react";
import type { ShopInfo, StateSetter } from "@localtypes/types";
import { defaultShopInfo } from "@data/home/publicData";

export interface PublicDataContextType {
  shopInfo: ShopInfo;
  setShopInfo: StateSetter<ShopInfo>;
}

export const PublicDataContext = createContext<PublicDataContextType>({
  shopInfo: defaultShopInfo,
  setShopInfo: () => {},
});
