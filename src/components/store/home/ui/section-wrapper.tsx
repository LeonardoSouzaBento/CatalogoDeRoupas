import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

function SectionWrapper({ className, ...props }: ComponentProps<'section'>) {
  return (
    <section
      data-slot="home-section-wrapper"
      data-default-shadow="true"
      className={cn(
        `w-full pt-6 pb-8 data-clothes:pb-4 px-3 sm:px-4 md:px-6 data-clothes:pl-3 data-clothes:sm:pl-4 
        data-clothes:md:pl-6 bg-linear-to-r from-gray-50 to-white 
        [data-default-shadow="true"]:shadow-home-sections scrollbar-hidden`,
        className,
      )}
      {...props}
    />
  );
}


export { SectionWrapper };
