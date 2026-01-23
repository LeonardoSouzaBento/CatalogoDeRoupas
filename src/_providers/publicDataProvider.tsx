'use client';
import { PublicDataContext } from '@/contexts/publicDataContext_';
import { defaultShopInfo } from '@/data/home/publicData';
import type { ProviderType, ShopInfo } from '@/types/types';
import React, { useState } from 'react';

export const PublicDataProvider: React.FC<ProviderType> = ({ children }) => {
  const [shopInfo, setShopInfo] = useState<ShopInfo>(defaultShopInfo);
  return (
    <PublicDataContext.Provider value={{ shopInfo, setShopInfo }}>
      {children}
    </PublicDataContext.Provider>
  );
};
