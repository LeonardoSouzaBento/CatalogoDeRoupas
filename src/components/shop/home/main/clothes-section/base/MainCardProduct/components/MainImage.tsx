import type { HomeClothing } from "@/types/types";
import Image from "next/image";

export interface MainImageProps {
  item: HomeClothing;
}

const css = {
  wrapperImg: "p-2 min-w-[60%] relative",
  img: "size-full object-cover",
};

export const MainImage = ({
  item,
}: MainImageProps) => {
  return (
    <div className={`${css.wrapperImg}`}>
      <Image
        src={item.img2}
        alt={`Img do produto: ${item.alt}`}
        className={`${css.img}`}
        fill={true}
      />
    </div>
  );
};
