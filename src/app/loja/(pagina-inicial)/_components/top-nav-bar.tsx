'use client';
import { Button, CustomLink } from '@/components/ui/index';
import { BooleanSetter } from '@/types/types';
import { Heart, Menu, Search, User } from 'lucide-react';
import React from 'react';

const buttons = [
  { icon: User, name: 'Minha Conta', link: '/loja/minha-conta' },
  { icon: Menu, name: 'Mais Opções' },
  { icon: Search, isSearchButton: true, link: '/loja/pesquisar' },
  { icon: Heart, name: 'Favoritos', link: '/loja/favoritos' },
];

const css = {
  mainWrapper: 'w-full h-auto sticky top-0 left-0 z-2 bg-white/36 backdrop-blur-xs shadow-sm',
  wrapper:
    'w-[calc(100%-32px)] max-w-[1180px] m-auto flex justify-between items-center flex-wrap gap-4 sm:flex-nowrap md:justify-center lg:gap-8',
  nav: 'h-18 w-full flex justify-between items-center sm:justify-center gap-3 sm:gap-4 md:gap-5 flex-auto',
};

/* 
const css = {
  button:
    'font-medium h-10 px-0 flex-center gap-[6px] sm:px-4 sm:pl-[14px] br-md bg-white/24 ',
  wrapperIcon: 'h-10 w-10 flex-center bg-white/24 sm:bg-transparent',
  p: 'hidden sm:inline pr-2 text-left text-neutral-800 leading-none ',
  buttonSearch: `h-10 w-34 sm:min-w-36 max-w-60 px-4 flex flex-auto justify-between 
    items-center br-md lg:order-2 shadow-md/4 bg-white/24 border border-transparent 
    hover:scale-102 transition-all! duration-300 5 `,
  wrapperIconSearch: 'button-square',
};
*/

const TopNavBar = ({
  setSeeOptionsSection,
}: {
  setSeeOptionsSection: BooleanSetter;
}): React.ReactElement => {
  return (
    <>
      <div className={css.mainWrapper}>
        <div className={`${css.wrapper}`}>
          <nav className={`${css.nav}`}>
            {buttons.map((button) => (
              <Button
                key={button.name}
                variant="transparent"
                size="sm"
                onClick={() => {
                  if (button.name === 'Mais Opções') {
                    setSeeOptionsSection(true);
                  }
                }}>
                {!button.link ? (
                  <>
                    <button.icon />
                    {button.name}
                  </>
                ) : (
                  <CustomLink link={button.link}>
                    <button.icon />
                    {button.name}
                  </CustomLink>
                )}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
