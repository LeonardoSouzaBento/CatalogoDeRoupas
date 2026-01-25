'use client';
import { Button, CustomLink, Icon } from '@/components/ui';
import { BooleanSetter } from '@/types/types';
import { Heart, Menu, Search, User, type LucideIcon } from 'lucide-react';
import React from 'react';

interface ButtonType {
  LucideIcon: LucideIcon;
  name: string;
  link?: string;
  searchButton?: boolean;
}

const buttons: ButtonType[] = [
  { LucideIcon: User, name: 'Minha Conta', link: '/loja/minha-conta' },
  { LucideIcon: Menu, name: 'Mais Opções' },
  { LucideIcon: Search, name: 'Buscar', searchButton: true, link: '/loja/pesquisar' },
  { LucideIcon: Heart, name: 'Favoritos', link: '/loja/favoritos' },
];

const css = {
  mainWrapper: 'w-full h-auto sticky top-0 left-0 z-2 bg-white/36 backdrop-blur-xs shadow-sm',
  wrapper:
    'w-[calc(100%-32px)] max-w-[1180px] m-auto flex justify-between items-center flex-wrap gap-4 sm:flex-nowrap md:justify-center lg:gap-8',
  nav: `h-18 w-full max-w-212 flex justify-between items-center sm:justify-center 
  gap-4 flex-auto [&>button]:font-medium [&>button]:bg-white/24 [&>button]:flex-auto`,
  searchButton: `min-w-1/3 justify-between lg:order-2 
  shadow-md/4 bg-white/24 hover:scale-102 
  transition-all duration-300`,
};

const TopNavBar = ({
  setSeeOptionsSection,
  isMobile,
}: {
  setSeeOptionsSection: BooleanSetter;
  isMobile: boolean;
}): React.ReactElement => {
  return (
    <>
      <div className={css.mainWrapper}>
        <div className={`${css.wrapper}`}>
          <nav className={`${css.nav}`}>
            {buttons.map((button) => {
              return button.searchButton ? (
                <Button
                  key={button.name}
                  size={isMobile ? 'icon' : 'sm'}
                  variant="transparent"
                  className={`${css.searchButton}`}>
                  Buscar
                  <Icon LucideIcon={button.LucideIcon} strokeValue={'medium'} size={'lg'} />
                  <CustomLink link={'/loja/pesquisar'} />
                </Button>
              ) : (
                <Button
                  key={button.name}
                  size={isMobile ? 'icon' : 'sm'}
                  variant="transparent"
                  className={`hover:shadow-sm`}
                  onClick={() => {
                    setSeeOptionsSection?.(true);
                  }}>
                  <Icon
                    LucideIcon={button.LucideIcon}
                    strokeValue={'medium'}
                    size={'lg'}
                    className="mb-[0.5px]"
                  />
                  {isMobile ? null : button.name}
                  {button.link ? <CustomLink link={button.link} /> : null}
                </Button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export { TopNavBar };
