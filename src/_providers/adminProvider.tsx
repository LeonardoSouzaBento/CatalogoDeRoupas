import { AdminContext } from '@/contexts/adminContext_';
import useLocalStorage from '@/hooks/useLocalStorage';
import type { ProviderType } from '@/types/types';
import React from 'react';

export const AdminProvider: React.FC<ProviderType> = ({ children }) => {
  const [blobUrls, setBlobUrls] = useLocalStorage('blobUrls', ['']);

  return (
    <AdminContext.Provider
      value={{
        blobUrls,
        setBlobUrls,
      }}>
      {children}
    </AdminContext.Provider>
  );
};
