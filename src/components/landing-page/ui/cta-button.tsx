'use client';
import { CustomLink, Icon } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ShoppingBag } from 'lucide-react';
import React from 'react';

export function ButtonWrapper({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('w-full flex justify-center', className)} {...props} />;
}

import { Button as ButtonShadcn } from '@/components/ui/button';

export function Button({ className, ...props }: React.ComponentProps<typeof ButtonShadcn>) {
  return <ButtonShadcn className={className} {...props} />;
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
      <Button className={cssButton}>
        {showIcon && <Icon LucideIcon={ShoppingBag} size="lg" className="mb-0.5" />}
        Ver Um Catálogo Completo
        <CustomLink link="/loja" />
      </Button>
    </ButtonWrapper>
  );
}
