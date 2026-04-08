import { createContext, useContext } from "react";
import type { AdminContextType } from "./adminContext";
import type { PublicDataContextType } from "./publicDataContext";
import type { UserContextType } from "./userContext";
import type { HomeContextType } from "./homeContext";

export const AdminContext = createContext<AdminContextType | null>(null);
export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext must be used within an AdminProvider");
  }
  return context;
};

export const PublicDataContext = createContext<PublicDataContextType | null>(
  null,
);
export const usePublicDataContext = () => {
  const context = useContext(PublicDataContext);
  if (!context) {
    throw new Error(
      "usePublicDataContext must be used within an PublicDataProvider",
    );
  }
  return context;
};

export const UserContext = createContext<UserContextType | null>(null);
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within an UserProvider");
  }
  return context;
};

export const HomeContext = createContext<HomeContextType | null>(null);
export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within an HomeProvider");
  }
  return context;
};
