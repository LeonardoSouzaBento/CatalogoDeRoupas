import React, { useState } from 'react';
import { MuiIcon, Button } from '@/components/ui';
import Link from 'next/link';

const pages = [
  {
    name: 'Início',
    href: '/',
    icon: 'Home',
  },
  {
    name: 'Buscar',
    href: '/loja/buscar',
    icon: 'Search',
  },
  {
    name: 'Favoritos',
    href: '/loja/favoritos',
    icon: 'Heart',
  },
  {
    name: 'Minha conta',
    href: '/loja/minha-conta',
    icon: 'Profile',
  },
];

const css = {
  wrapper: `flex h-full w-full items-center justify-around border-t bg-background/80 backdrop-blur-md`,
};

export const BottomNavBar = () => {
  const [selected, setSelected] = useState<string>('Início');

  return (
    <nav className="fixed bottom-0 left-0 h-14 w-full">
      <div className={`${css.wrapper} md:hidden`}>
        {pages.map((page) => (
          <ButtonNavBar key={page.name} page={page} selected={selected} mobile />
        ))}
      </div>
      <div className={`${css.wrapper} hidden md:flex`}>
        {pages.map((page) => (
          <ButtonNavBar key={page.name} page={page} selected={selected} />
        ))}
      </div>
      <div id="div-for-space" />
    </nav>
  );
};

interface ButtonNavBarProps {
  page: {
    name: string;
    href: string;
    icon: string;
  };
  selected: string;
  mobile?: boolean;
}

const ButtonNavBar = ({ page, selected, mobile }: ButtonNavBarProps) => {
  return (
    <Button variant="transparent" size={mobile ? 'icon' : 'sm'} asChild key={page.name}>
      <Link href={page.href}>
        <MuiIcon icon={page.icon} fill={selected === page.name ? true : false} />
        {mobile ? null : page.name}
      </Link>
    </Button>
  );
};
