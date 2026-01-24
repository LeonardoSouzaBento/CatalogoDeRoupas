'use client';
import { Button, CustomLink, Icon } from '@/components/ui';
import { X } from 'lucide-react';

const css = {
  wrapper: `h-14 px-5 mb-5 box-content flex items-center j-between round-none 
  bg-gradient-to-r from-stone-800 to-stone-700`,
  pLogo: 'leading-none font-logo text-white text-stone-800 ',
};

export const Header = ({ seeButtonClose = true }: { seeButtonClose?: boolean }) => {
  return (
    <div className={`${css.wrapper}`}>
      <div className="h-13 w-max flex-center">
        <p className={`${css.pLogo}`}>Roupas Online</p>
      </div>

      {seeButtonClose && (
        <Button variant={'transparent'} size="icon">
          <Icon LucideIcon={X} />
          <CustomLink link={'/loja'} />
        </Button>
      )}
    </div>
  );
};
