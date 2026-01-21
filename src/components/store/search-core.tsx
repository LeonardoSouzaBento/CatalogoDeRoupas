import React from 'react';
import ZapFixedButton from '@/components/ui/ZapFixedButton';
import { Header, SearchButton, UserGenders, Suggestions } from './search/index';

const SearchCore = () => {
  return (
    <>
      <Header />
      <div className="px-3">
        <SearchButton />
        <UserGenders />
        <Suggestions />
        <ZapFixedButton />
      </div>
    </>
  );
};

export default SearchCore;
