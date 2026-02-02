'use client';
import Link from 'next/link';
import { Button, Icon } from '@/components/ui';
import { X } from 'lucide-react';

const css = {
  wrapper: `h-14 px-3 sm:px-4 md:px-6 box-content flex items-center justify-between rounded-none 
  bg-gradient-to-r from-primary-900 to-primary-800`,
  shopName: 'leading-none font-logo text-primary-50 font-normal',
};

export const Header = ({ seeButtonClose = true }: { seeButtonClose?: boolean }) => {
  return (
    <div className={`${css.wrapper}`}>
      <div className="h-12 w-max flex-center">
        <h2 className={`${css.shopName}`}>Roupas Online</h2>
      </div>

      {seeButtonClose && (
        <Button variant={'default'} size="icon" asChild className="rounded-full">
          <Link href="/loja">
            <Icon LucideIcon={X} />
          </Link>
        </Button>
      )}
    </div>
  );
};
