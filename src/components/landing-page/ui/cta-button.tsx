'use client';
import { Icon } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function ButtonWrapper({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('w-full flex justify-center', className)} {...props} />;
}

interface CTAButtonProps {
  showIcon?: boolean;
  hideInMobile?: boolean;
  cssWrapper?: string;
  cssButton?: string;
}

export function CTAButton({
  showIcon = true,
  hideInMobile = false,
  cssWrapper = '',
  cssButton = '',
}: CTAButtonProps) {
  return (
    <ButtonWrapper
      className={`${hideInMobile ? 'hidden pre-lg:flex mt-6' : 'flex pre-lg:hidden mt-6'} ${cssWrapper}`}>
      <Link
        href="/loja"
        className={`h-11 flex items-center justify-center gap-2 px-[1.5em]
        text-center rounded-xl font-semibold cursor-pointer
        bg-linear-to-r from-yellow-300 to-yellow-400
        hover:scale-104 transition-all duration-200
      [&_svg]:text-theme large-button leading-none ${cssButton}`}>
        {showIcon && <Icon LucideIcon={ShoppingBag} size="lg" className="mb-0.5" />}
        Ver Catálogo Completo
      </Link>
    </ButtonWrapper>
  );
}
