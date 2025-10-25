import Image from "next/image";
import type { BoolSetter, SpecialSelectionSchema } from "@/types/types";
import ImageInput from "../inputs/ImageInput";

export interface MainImageProps {
  item: SpecialSelectionSchema;
  seeMainImageInput: boolean;
  setSeeMainImageInput: BoolSetter;
}

const css = {
  wrapperImg: "p-2 min-w-[60%] relative",
  img: "size-full object-cover",
};

export const MainImage = ({
  item,
  seeMainImageInput,
  setSeeMainImageInput,
}: MainImageProps) => {
  return (
    <div className={`${css.wrapperImg}`}>
      {seeMainImageInput && <ImageInput setSeeInput={setSeeMainImageInput} />}
      <Image
        src={item.img2}
        alt={`Img do produto: ${item.alt}`}
        className={`${css.img}`}
        fill={true}
      />
    </div>
  );
};
