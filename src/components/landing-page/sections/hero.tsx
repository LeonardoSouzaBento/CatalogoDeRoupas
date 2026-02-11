import React from 'react';
import { CTAButton, Iphone15Pro } from '../ui/index';
import { TextContent } from './hero/index';

const css = {
  section: `h-auto w-full pt-[4.5em] pb-11 rounded-none 
  bg-linear-to-br from-theme to-male-theme px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14`,
  wrapper: `max-w-176 mx-auto pre-lg:max-w-none xl:max-w-274 grid grid-cols-1 gap-6 
  pre-lg:grid-cols-2`,
  messageWrapper: 'w-full flex flex-col justify-center items-center',
  imageContainer: `h-full relative pre-lg:pt-10`,
  imageWrapper: `size-full h-118 max-w-3xl mx-auto relative flex-center gap-4
  [&_img]:rounded-xl`,
  firstImgWrapper: `h-full block max-w-90 sm:max-w-none`,
  secondImgWrapper: `h-full hidden pre-sm:block`,
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
            <div className={css.firstImgWrapper}>
              <Iphone15Pro />
            </div>
            <div className={css.secondImgWrapper}>
              <Iphone15Pro />
            </div>
          </div>
          <CTAButton
            cssWrapper="justify-center"
            cssButton="shadow-accent w-full max-w-90 sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
