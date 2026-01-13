import { iconMd } from '@/app/css/lucideIconStyles';
import { Search } from 'lucide-react';
import Link from 'next/link';

const css = {
  button: `h-11 w-full pl-4 pr-0 flex items-center gap-2 br-md hover:bg-neutral-200/70 bg-neutral-100`,
  wrraperIcon: 'h-full w-13 flex-center pb-[1px] px-0 bg-transparent trans',
  input: 'w-full min-h-full flex-auto p-0! font-normal! bg-transparent!',
};

const SearchButton = () => {
  return (
    <div className="px-2">
      <button className={`${css.button}`}>
        <input type="search" placeholder="O que você procura?" className={`${css.input} input`} />
        <Link href={'/loja/produto/'} className={`${css.wrraperIcon}`}>
          <Search {...iconMd} />
        </Link>
      </button>
    </div>
  );
};

export default SearchButton;
