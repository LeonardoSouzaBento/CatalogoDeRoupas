import { Heart } from "lucide-react";
import { useState } from "react";
import type { SpecialSelectionItem } from "@/types/types";
import { MainImage } from "./components/MainImage";
import { SecondaryImage } from "./components/SecondaryImage";
import ProductInfo from "./components/ProductInfo";

const css = {
  wrapperProduct:
    "h-max min-w-[80vw] sm:min-w-110 flex flex-col items-end soft-shadow hover:shadow-lg fast-trans rounded-sm overflow-hidden",
  wrapperImgs:
    "w-full min-h-[80vw] sm:min-h-[480px] md:h-[480px] flex border-b-1 border-gray-200 relative bg-white rounded-none",
  buttonHeart: "size-max absolute bottom-1 right-1 z-2 flex bg-button br-sm",
  wrapperIcon: "h-10 min-w-10 w-max centralize gap-3 fast-trans",
  wrapperPReturn: "centralize h-10 px-5",
};

const MainCardProduct = ({
  item,
}: SpecialSelectionItem): React.ReactElement => {
  // Ao favoritar
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [fastReturn, setFastReturn] = useState<boolean>(false);
  const iconStyle = !isFavorite
    ? { color: "oklch(20.5% 0 0)"}
    : { color: "oklch(58.6% 0.253 17.585)", fill: "oklch(58.6% 0.253 17.585)" };

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
              <p>{isFavorite ? "Salvo!" : "Removido!"}</p>
            </div>
          )}
          <div className={`${css.wrapperIcon}`}>
            <Heart strokeWidth={2} {...iconStyle} />
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
