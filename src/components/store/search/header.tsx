'use client';
import { Button, CustomLink, Icon } from '@/components/ui';
import { X } from 'lucide-react';

const css = {
  wrapper: `h-14 px-5 box-content flex items-center justify-between rounded-none 
  bg-gradient-to-r from-stone-800 to-stone-700`,
  shopName: 'leading-none font-logo text-white text-stone-800 font-normal',
};

export const Header = ({ seeButtonClose = true }: { seeButtonClose?: boolean }) => {
  return (
    <div className={`${css.wrapper}`}>
      <div className="h-12 w-max flex-center">
        <h2 className={`${css.shopName}`}>Roupas Online</h2>
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
