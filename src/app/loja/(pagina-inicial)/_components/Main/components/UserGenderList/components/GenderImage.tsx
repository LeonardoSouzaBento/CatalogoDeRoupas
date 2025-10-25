import React from "react";
import Image from "next/image";
import { GenderKey, UserCategory } from "@/types/types";

const css = {
  wrapperImg: "size-full overflow-visible",
  img: "size-auto overflow-visible abso object-top object-cover scale-136 -translate-y-[8vw] sm:-translate-y-0 transition-transform duration-600 grayscale sepia-40 opacity-74 mix-blend-multiply",
  selectedImg:
    "-translate-y-[14vw] sm:-translate-y-[6vw] md:-translate-y-[3vw] opacity-100 mix-blend-normal grayscale-0",
};

const GenderImage = ({
  item,
  index,
  selectedGender,
}: {
  item: UserCategory;
  index: number;
  selectedGender: GenderKey;
}) => {
  return (
    <div className={`${css.wrapperImg}`}>
      <Image
        id={`Category-${index}`}
        src={`${item.img}`}
        alt={`Categoria ${index + 1}`}
        className={`${css.img} ${
          selectedGender === item.name && css.selectedImg
        }`}
        fill={true}
      />
    </div>
  );
};

export default GenderImage;
