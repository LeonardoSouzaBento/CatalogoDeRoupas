import Image from "next/image";
import type { BooleanSetter, SpecialClothing } from "@/types/types";
import ImageInput from "../inputs/ImageInput";

export interface SecondaryImageProps {
  item: SpecialClothing;
  seeSecondaryImageInput: boolean;
  setSeeSecondaryImageInput: BooleanSetter;
}

const css = {
  wrapperImg: "p-2 min-w-[40%] relative",
  img: "size-full object-cover",
};

export const SecondaryImage = ({
  item,
  seeSecondaryImageInput,
  setSeeSecondaryImageInput,
}: SecondaryImageProps) => {
  return (
    <div className={`${css.wrapperImg}`}>
      {seeSecondaryImageInput && (
        <ImageInput setSeeInput={setSeeSecondaryImageInput} mainImage={false} />
      )}
      <Image
        src={item.img1}
        alt={`Img do produto: ${item.alt}`}
        className={`${css.img}`}
        fill={true}
      />
    </div>
  );
};
