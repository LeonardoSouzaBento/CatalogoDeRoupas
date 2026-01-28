'use client';
import { defaultUserData } from '@/data/UserData';
import type { Gender, StateSetter, UserData } from '@/types/types';
import { createContext } from 'react';

export interface UserContextType {
  userData: UserData;
  setUserData: StateSetter<UserData>;
  /*  */
  searchTerm: string;
  setSearchTerm: StateSetter<string>;
  /* Gêneros do usuário */
  childCatSelected: boolean;
  setChildCatSelected: StateSetter<boolean>;
  selectedGender: Gender;
  setSelectedGender: StateSetter<Gender>;
}

export const UserContext = createContext<UserContextType>({
  userData: defaultUserData,
  setUserData: () => {},
  /*  */
  searchTerm: '',
  setSearchTerm: () => {},
  /* Genêros de usuario */
  childCatSelected: false,
  setChildCatSelected: () => {},
  selectedGender: 'masculino',
  setSelectedGender: () => {},
});
