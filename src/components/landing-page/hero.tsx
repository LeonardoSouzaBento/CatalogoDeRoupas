import React from 'react';
import { CallButton } from '../_ui/index';
import { Image, TextContent } from './hero/index';

const css = {
  mainSection: `h-auto w-full pt-26 sm:pt-25 md:pt-23 xl:pt-21 p-6 rounded-none 
`,
  wrapper: 'm-auto max-w-[1200px] flex flex-col md:flex-row gap-8',
  wrapperMainMessage:
    'w-full max-w-[1024px] flex flex-col justify-center items-center md:w-1/2',
  wrapperImg: 'h-130 w-full max-w-[1024px] flex flex-col md:w-1/2',
};

const Hero = (): React.ReactElement => {
  return (
    <section className={`${css.mainSection} bg-linear-to-br from-female to-male`}>
      <div className={`${css.wrapper}`}>
        <div className={`${css.wrapperMainMessage}`}>
          <TextContent />
          <CallButton section="main" hideInMobile={true} />
        </div>
        <div className={`${css.wrapperImg}`}>
          <Image />
          <CallButton section="main" wrapperStyles="justify-center" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
