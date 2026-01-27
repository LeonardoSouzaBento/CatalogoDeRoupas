import { createContext } from 'react';
import type { StateSetter } from '@/types/types';

export interface AdminContextType {
  blobUrls: string[];
  setBlobUrls: StateSetter<string[]>;
}

export const AdminContext = createContext<AdminContextType>({
  blobUrls: [''],
  setBlobUrls: () => {},
});
