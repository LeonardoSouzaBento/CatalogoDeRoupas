import Image from 'next/image';
import React from 'react';
import { CTAButton } from '../ui/index';
import { TextContent } from './hero/index';

const css = {
  section: `h-auto w-full pt-[4.5em] pb-11 rounded-none 
  bg-linear-to-br from-female to-male px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14`,
  wrapper: `m-auto max-w-274 grid grid-cols-1 gap-8 
  pre-lg:grid-cols-2`,
  messageWrapper: 'w-full flex flex-col justify-center items-center',
  imageContainer: `h-full relative pt-10 space-y-4`,
  imageWrapper: `w-full h-120 pre-lg:h-full pt-4 relative
  overflow-y-scroll [&_img]:rounded-xl`,
};

const Hero = (): React.ReactElement => {
  return (
    <section className={css.section}>
      <div className={css.wrapper}>
        <div className={css.messageWrapper}>
          <TextContent />
          <CTAButton hideInMobile={true} />
        </div>
        <div className={css.imageContainer}>
          <div className={css.imageWrapper}>
            <Image src="/home/phone3.png" alt="" fill={true} />
          </div>
          <CTAButton classNames={['max-w-none justify-center', 'shadow-accent']} />
        </div>
      </div>
    </section>
  );
};

export { Hero };
