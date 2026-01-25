import React from 'react';
import Image from 'next/image';
import { CTAButton } from './cta-button';

const MainImage = ({ src = '/home/phone3.png' }: { src: string }) => {
  const css = {
    container: `w-full h-120 p-6 m-auto flex items-start relative
      relative rounded-b-2xl bg-primary-50 crop border-dashed border-t border-female/22`,
    image: 'size-full w-full object-cover mx-auto bg-light-bg',
  };

  return (
    <div className={`${css.container}`}>
      <Image src={src || '/home/phone3.png'} alt="" className={`${css.image}`} fill={true} />
      <div className="absolute h-max py-6 w-full bottom-0 left-0 flex-center" >
        <CTAButton hideInMobile={true} />
        <CTAButton hideInMobile={false} />
      </div>
    </div>
  );
};

export { MainImage };
