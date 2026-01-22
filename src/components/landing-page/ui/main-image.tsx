import React from 'react';
import Image from 'next/image';

const MainImage = ({ src = '/home/phone3.png' }: { src: string }) => {
  const css = {
    wrapperImg: `block w-full h-120 md:h-108 max-w-120 md:max-w-126 m-auto flex items-start 
      relative crop rounded-xl bg-neutral-50`,
    img: 'size-full object-contain mix-blend-multiply',
    imgTwo: '',
  };

  return (
    <div className={`${css.wrapperImg}`}>
      <Image src={src || '/home/phone3.png'} alt="" className={`${css.img}`} fill={true} />
    </div>
  );
};

export { MainImage };
