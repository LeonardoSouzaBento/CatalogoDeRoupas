import { Button, CustomLink } from '@/components/ui';
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
  buttonWrapper: ` [&>button:first-child]:hidden [&>button:first-child]:md:flex 
  [&>button:last-child]:flex [&>button:last-child]:md:hidden
  [&>button:hover]:bg-white/66`,
  button: 'font-medium h-10 px-0 flex-center gap-[6px] sm:px-4 sm:pl-[14px] br-md bg-white/24 ',
  searchButton: `w-34 sm:min-w-36 max-w-60 justify-between lg:order-2 
  shadow-md/4 bg-white/24 border border-transparent hover:scale-102 transition-all duration-300`,
};

const NavButton = ({
  icon: Icon,
  isSearchButton,
  name,
  link,
  setSeeOptionsSection = () => {},
}: ButtonType): React.ReactElement => {
  return isSearchButton ? (
    <div className={`${css.buttonWrapper}`}>
      <Button size={'sm'} variant="transparent" className={`${css.searchButton} flex-auto`}>
        Buscar
        <Icon />
        <CustomLink link={link || '/'} />
      </Button>
      {/* botão mobile */}
      <Button size={'icon'} variant="transparent" className={`${css.searchButton}`}>
        <Icon />
        <CustomLink link={link || '/'} />
      </Button>
    </div>
  ) : (
    <div className={`${css.buttonWrapper}`}>
      <Button
        size={'sm'}
        variant="transparent"
        className={`${css.button} flex-auto`}
        onClick={() => {
          setSeeOptionsSection?.(true);
        }}>
        <Icon />
        {name}
        {link ? <CustomLink link={link} /> : null}
      </Button>
      {/* botão mobile */}
      <Button
        size={'icon'}
        variant="transparent"
        className={`${css.searchButton}`}
        onClick={() => {
          setSeeOptionsSection?.(true);
        }}>
        <Icon />
        {link ? <CustomLink link={link} /> : null}
      </Button>
    </div>
  );
};

export { NavButton };
