'use client';
import Link from 'next/link';
import { Button, Icon } from '@/components/ui';
import type { BooleanSetter } from '@/types/types';
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
  mainWrapper: 'w-full h-auto sticky top-0 left-0 z-4 bg-light-bg/50 backdrop-blur-xs shadow-sm',
  wrapper: 'px-4 sm:px-6 max-w-212 mx-auto',
  nav: `h-18 w-full flex justify-between items-center
   flex-auto [&>button]:font-medium [&>button]:bg-light-bg/24`,
  button: `hover:shadow-sm! hover:bg-light-bg! cursor-pointer!`,
  searchButton: `min-w-30 w-1/3 max-w-64 justify-between lg:order-2 
  shadow-md/4 bg-light-bg/24 hover:scale-102 
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
              const size = isMobile && !button.searchButton ? 'icon' : 'sm';
              const classes = button.searchButton ? css.searchButton : '';
              return (
                <Button
                  key={button.name}
                  size={size}
                  variant="transparent"
                  className={`${css.button} ${classes}`}
                  asChild
                  onClick={() => {
                    if (button.name === 'Mais Opções') {
                      setSeeOptionsSection(true);
                    }
                  }}>
                  <Link href={button.link || ''}>
                    {button.searchButton ? 'Buscar' : null}
                    <Icon
                      LucideIcon={button.LucideIcon}
                      strokeWidth={'medium'}
                      size={'lg'}
                      className="mb-[0.5px]"
                      fill="var(--color-icon-fill)"
                    />
                    {isMobile || button.searchButton ? null : button.name}
                  </Link>
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
