import { Heart } from "lucide-react";
import { useState } from "react";
import type { SpecialSelectionItem } from "@/types/types";
import { MainImage } from "./components/MainImage";
import { SecondaryImage } from "./components/SecondaryImage";
import ProductInfo from "./components/ProductInfo";

const css = {
  wrapperProduct:
    "h-max min-w-[80vw] sm:min-w-110 flex flex-col items-end shadow-md hover:shadow-lg fast-trans rounded-sm overflow-hidden",
  wrapperImgs:
    "w-full min-h-[80vw] sm:min-h-[480px] md:h-[480px] flex border-b-1 border-gray-200 relative bg-white rounded-none",
  buttonHeart: "size-max absolute bottom-1 right-1 z-2 flex",
  wrapperIcon: "h-10 min-w-10 w-max centralize gap-3 bg-bt fast-trans",
  wrapperPReturn: "centralize h-10 px-5 bg-gray-100",
  nameP:
    "capitalize text-[1.125em] sm:text-[1.132em] md:text-[1.136em] lg:text-[1.143em] xl:text-[1.150em] 2xl:text-[1.157em]",
};

const MainCardProduct = ({
  item,
}: SpecialSelectionItem): React.ReactElement => {
  // Ao favoritar
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [fastReturn, setFastReturn] = useState<boolean>(false);
  const fillColor = isFavorite ? "oklch(20.5% 0 0)" : "none";

  function handleClickFavorite() {
    setIsFavorite((prev) => !prev);
    setFastReturn(true);
    setTimeout(() => setFastReturn(false), 1800);
  }

  /* inputs de edição */
  const [seeMainImageInput, setSeeMainImageInput] = useState<boolean>(false);
  const [seeSecondaryImageInput, setSeeSecondaryImageInput] =
    useState<boolean>(false);
  const [seeProductInfoInput, setSeeProductInfoInput] =
    useState<boolean>(false);

  return (
    <div className={`${css.wrapperProduct}`}>
      <div className={`${css.wrapperImgs}`} id="wrapperImgs">
        <button
          className={`${css.buttonHeart} ${fastReturn && "shadow-md/16"}`}
          onClick={handleClickFavorite}
        >
          {fastReturn && (
            <div className={`${css.wrapperPReturn}`}>
              <p className={`${css.nameP}`}>
                {isFavorite ? "Salvo!" : "Removido!"}
              </p>
            </div>
          )}
          <div className={`${css.wrapperIcon}`}>
            <Heart strokeWidth={2} fill={fillColor} />
          </div>
        </button>
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
