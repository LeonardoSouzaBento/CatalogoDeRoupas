'use client';
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { CustomLink, Icon } from '@/components/ui';
import { cn } from '@/lib/utils';

export function ButtonWrapper({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('size-auto flex', className)} {...props} />;
}

export function Button({ className, ...props }: React.ComponentProps<'button'>) {
  return (
    <button
      className={cn(
        `
        h-12 max-w-86 flex items-center justify-center gap-2 px-[1.5em]
        text-center rounded-xl font-semibold cursor-pointer
        bg-linear-to-r from-yellow-300 to-yellow-400
        hover:scale-104 transition-all duration-200
      [&_svg]:text-female large-button
        `,
        className,
      )}
      {...props}
    />
  );
}

interface CTAButtonProps {
  showIcon?: boolean;
  hideInMobile?: boolean;
  classNames?: string[];
}

export function CTAButton({
  showIcon = true,
  hideInMobile = false,
  classNames = ['', ''],
}: CTAButtonProps) {
  return (
    <ButtonWrapper
      className={cn(hideInMobile ? 'hidden md:flex!' : 'flex md:hidden!', classNames[0])}>
      <Button className={classNames[1]}>
        {showIcon && <Icon LucideIcon={ShoppingBag} size="lg" className="mb-0.5" />}
        Ver Um Catálogo Completo
        <CustomLink link="/loja" />
      </Button>
    </ButtonWrapper>
  );
}
