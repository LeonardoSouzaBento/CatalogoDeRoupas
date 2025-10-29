import { useState } from "react";
import type { SpecialSelectionItem } from "@/types/types";
import { MainImage } from "./components/MainImage";
import { SecondaryImage } from "./components/SecondaryImage";
import ProductInfo from "./components/ProductInfo";
import FavoriteButton from "@/app/loja/_ui/FavoriteButton";

const css = {
  wrapperProduct:
    "h-max min-w-[80vw] sm:min-w-110 flex flex-col items-end shadow-soft hover:shadow-soft-hover hover:scale-101 fast-trans br-lg  overflow-hidden",
  wrapperImgs:
    "w-full min-h-[80vw] sm:min-h-[480px] md:h-[480px] flex relative bg-white rounded-none",
};

const MainCardProduct = ({
  item,
}: SpecialSelectionItem): React.ReactElement => {
  /* inputs de edição */
  const [seeMainImageInput, setSeeMainImageInput] = useState<boolean>(false);
  const [seeSecondaryImageInput, setSeeSecondaryImageInput] =
    useState<boolean>(false);
  const [seeProductInfoInput, setSeeProductInfoInput] =
    useState<boolean>(false);

  return (
    <div className={`${css.wrapperProduct}`}>
      <div className={`${css.wrapperImgs}`} id="wrapperImgs">
        <FavoriteButton />
        <SecondaryImage
          item={item}
          seeSecondaryImageInput={seeSecondaryImageInput}
          setSeeSecondaryImageInput={setSeeSecondaryImageInput}
        />
        <MainImage
          item={item}
          seeMainImageInput={seeMainImageInput}
          setSeeMainImageInput={setSeeMainImageInput}
        />
      </div>
      <ProductInfo
        item={item}
        seeProductInfoInput={seeProductInfoInput}
        setSeeProductInfoInput={setSeeProductInfoInput}
      />
    </div>
  );
};

export default MainCardProduct;
