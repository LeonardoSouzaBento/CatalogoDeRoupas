import React from 'react'
import Image from 'next/image';

export const MainImage = () => {
  const css = {
    wrapperImg: "block w-full h-120 max-w-90 m-auto",
    img: "size-full object-cover ",
  };
  return (
    <div className={`${css.wrapperImg}`}>
      <Image src="" alt="" className={`${css.img}`} />
    </div>
  );
};

export default MainImage;