import { ZapFixedButton } from '@/components/ui';
import { Header, SearchButton, Suggestions, UserGenders } from './search/index';

const SearchCore = () => {
  return (
    <>
      <Header />
      <div className="px-3 sm:px-4 md:px-6 space-y-6">
        <SearchButton />
        <UserGenders />
        <Suggestions />
        <ZapFixedButton />
      </div>
    </>
  );
};

export default SearchCore;
