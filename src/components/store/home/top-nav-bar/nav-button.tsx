import { BooleanSetter } from '@/types/types';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export interface ButtonType {
  icon: LucideIcon;
  isSearchButton?: boolean;
  name?: string;
  link?: string;
  setSeeOptionsSection?: BooleanSetter;
}

const css = {
  button: 'font-medium h-10 px-0 flex-center gap-[6px] sm:px-4 sm:pl-[14px] br-md bg-white/24 ',
  wrapperIcon: 'h-10 w-10 flex-center bg-white/24 sm:bg-transparent',
  p: 'hidden sm:inline pr-2 text-left text-neutral-800 leading-none ',
  buttonSearch: `h-10 w-34 sm:min-w-36 max-w-60 px-4 flex flex-auto justify-between 
    items-center br-md lg:order-2 shadow-md/4 bg-white/24 border border-transparent 
    hover:scale-102 transition-all! duration-300 5 `,
  wrapperIconSearch: 'button-square',
};

const hoverStyle = 'hover:bg-white/66';

const NavButton = ({
  icon: Icon,
  isSearchButton,
  name,
  link,
  setSeeOptionsSection = () => {},
}: ButtonType): React.ReactElement => {
  return isSearchButton ? (
    <Link className={`${css.buttonSearch} ${hoverStyle}`} href={link || '/'}>
      Buscar
      <div className={css.wrapperIconSearch}>
        <Icon />
      </div>
    </Link>
  ) : (
    <>
      {!link ? (
        <button
          className={`${css.button} ${hoverStyle}`}
          onClick={() => {
            setSeeOptionsSection?.(true);
          }}>
          <div className={css.wrapperIcon}>
            <Icon />
          </div>
          <p className={css.p}>{name}</p>
        </button>
      ) : (
        <Link className={`${css.button} ${hoverStyle}`} href={link}>
          <div className={css.wrapperIcon}>
            <Icon />
          </div>
          <p className={css.p}>{name}</p>
        </Link>
      )}
    </>
  );
};

export { NavButton };
