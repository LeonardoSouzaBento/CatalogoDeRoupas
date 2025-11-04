import type { HomeClothing } from "@/types/types";
import Image from "next/image";

export interface SecondaryImageProps {
  item: HomeClothing;
}

const css = {
  wrapperImg: "p-2 min-w-[40%] relative",
  img: "size-full object-cover",
};

export const SecondaryImage = ({ item }: SecondaryImageProps) => {
  return (
    <div className={`${css.wrapperImg}`}>
      <Image
        src={item.img1}
        alt={`Img do produto: ${item.alt}`}
        className={`${css.img}`}
        fill={true}
      />
    </div>
  );
};
