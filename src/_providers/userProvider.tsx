'use client';
import { UserContext } from '@/contexts/userContext_';
import { defaultUserData } from '@/data/UserData';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { Gender, ProviderType, UserData } from '@/types/types';
import React, { useState } from 'react';

export const UserProvider: React.FC<ProviderType> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  /* Generos do usuário */
  const [selectedGender, setSelectedGender] = useLocalStorage(
    'selectedGender',
    'masculino' as Gender,
  );
  const [childCatSelected, setChildCatSelected] = useLocalStorage('childCatSelected', false);

  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        /*  */
        searchTerm,
        setSearchTerm,
        /*  */
        selectedGender,
        setSelectedGender,
        childCatSelected,
        setChildCatSelected,
      }}>
      {children}
    </UserContext.Provider>
  );
};
