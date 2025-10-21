import React from 'react'
// import Image from 'next/image';

export const MainImage = () => {
  const css = {
    wrapperImg: "block w-full h-120 md:h-108 max-w-120 md:max-w-126 m-auto flex items-start",
    img: "size-full object-cover ",
    imgTwo: "",
  };
  
  return (
    <div className={`${css.wrapperImg}`}>
      {/* <Image src="" alt="" className={`${css.img}`} /> */}
    </div>
  );
};

export default MainImage;