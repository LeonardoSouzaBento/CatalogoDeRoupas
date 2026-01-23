import React from 'react';
import { CTAButton } from '../ui/index';
import { Image, TextContent } from './hero/index';

const css = {
  wrapper: `pb-12 m-auto max-w-280 flex flex-col gap-8 sm:px-6 md:px-8 
  next-md:flex-row next-md:px-0!`,
  messageWrapper: 'w-full max-w-256 flex flex-col justify-center items-center next-md:w-1/2',
  imageWrapper: 'w-full max-w-256 flex flex-col next-md:w-1/2',
};

const Hero = (): React.ReactElement => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.messageWrapper}`}>
        <TextContent />
        <CTAButton hideInMobile={true} />
      </div>
      <div className={`${css.imageWrapper}`}>
        <Image />
        <CTAButton classNames={['', 'justify-center shadow-accent']} />
      </div>
    </div>
  );
};

export { Hero };

