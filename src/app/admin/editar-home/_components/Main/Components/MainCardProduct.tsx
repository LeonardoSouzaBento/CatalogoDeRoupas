import { Heart } from "lucide-react";
import { useState } from "react";
import type { SpecialSelectionItem } from "@src/types/types";
import ImageInput from "../../InputsForEdit/EspecialSelections/ImageInput";
import ProductInfoInput from "../../InputsForEdit/EspecialSelections/ProductInfoInput";

const css = {
  wrapperProduct:
    "h-max min-w-[80vw] sm:min-w-110 flex flex-col items-end shadow-md hover:shadow-lg fast-trans light-border rounded-sm overflow-hidden",
  wrapperImgs:
    "w-full min-h-[80vw] sm:min-h-[480px] md:h-[480px] flex border-b-1 border-gray-200 relative bg-white rounded-none",
  wrapperImg1: "p-2 min-w-[40%] border-r-1 border-gray-200 relative",
  wrapperImg2: "p-2 min-w-[60%] relative",
  imgs: "size-full object-cover",
  wrapperInfo: "w-full h-max p-4 flex flex-col items-start gap-2 bg-white",
  nameP:
    "capitalize text-[1.125em] sm:text-[1.132em] md:text-[1.136em] lg:text-[1.143em] xl:text-[1.150em] 2xl:text-[1.157em]",
  priceP: "font-semibold",
  buttonHeart: "size-max absolute bottom-1 right-1 z-2 flex",
  wrapperIcon: "h-10 min-w-10 w-max centralize gap-3 bg-bt fast-trans",
  wrapperPReturn: "centralize h-10 px-5 bg-gray-100",
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
        <div className={`${css.wrapperImg1}`}>
          {seeSecondaryImageInput && (
            <ImageInput
              setSeeInput={setSeeSecondaryImageInput}
              mainImage={false}
            />
          )}
          <img
            src={item.img1}
            alt={`Img do produto: ${item.alt}`}
            className={`${css.imgs}`}
          />
        </div>
        <div className={`${css.wrapperImg2}`}>
          {seeMainImageInput && (
            <ImageInput setSeeInput={setSeeMainImageInput} />
          )}
          <img
            src={item.img2}
            alt={`Img do produto: ${item.alt}`}
            className={`${css.imgs}`}
          />
        </div>
      </div>
      <div className={`${css.wrapperInfo}`}>
        {seeProductInfoInput ? (
          <ProductInfoInput
            setSeeProductInfoInput={setSeeProductInfoInput}
            id={item.id}
          />
        ) : (
          <>
            <p className={`${css.nameP}`}>
              {item.name} Lorem ipsum, dolor sit amet consectetur adipisicing
            </p>
            <p className={`${css.priceP}`}>R${item.price}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default MainCardProduct;
