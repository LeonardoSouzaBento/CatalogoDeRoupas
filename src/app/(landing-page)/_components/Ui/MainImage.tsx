import React from "react";
import Image from "next/image";

export const MainImage = () => {
  const css = {
    wrapperImg:
      "block w-full h-120 md:h-108 max-w-120 md:max-w-126 m-auto flex items-start relative crop rounded-xl bg-gray-50",
    img: "size-full object-contain mix-blend-multiply",
    imgTwo: "",
  };

  return (
    <div className={`${css.wrapperImg}`}>
      <Image
        src="/home/phone3.png"
        alt=""
        className={`${css.img}`}
        fill={true}
      />
    </div>
  );
};

export default MainImage;
