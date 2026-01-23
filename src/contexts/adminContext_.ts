import { createContext } from "react";
import { StateSetter } from "@/types/types";

export interface AdminContextType {
  blobUrls: string[];
  setBlobUrls: StateSetter<string[]>;
}

export const AdminContext = createContext<AdminContextType>({
  blobUrls: [""],
  setBlobUrls: () => {},
});
