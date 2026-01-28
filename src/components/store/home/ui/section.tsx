import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

/* 
interface SectionProps extends ComponentProps<'section'> {
  bgLinear?: boolean;
  defaultShadow?: boolean;
}
*/

function Section({
  className,
  bgLinear = true,
  defaultShadow = true,
  ...props
}: ComponentProps<'section'> & {
  bgLinear?: boolean;
  defaultShadow?: boolean;
}) {
  return (
    <section
      data-slot="home-section"
      className={cn(
        `w-full pt-6 pb-8 sm:px-4 md:px-6 data-clothes:pb-0 px-3
        data-clothes:px-0 
        ${bgLinear ? 'bg-linear-to-r from-medium-bg to-light-bg' : ''}
        ${defaultShadow ? 'shadow-home-sections' : ''}
        scrollbar-hidden`,
        className,
      )}
      {...props}
    />
  );
}

export { Section };
