import FavoriteButton from "@/app/loja/_ui/FavoriteButton";
import type {
  HomeClothing
} from "@/types/types";
import { MainImage } from "./components/MainImage";
import ProductInfo from "./components/ProductInfo";
import { SecondaryImage } from "./components/SecondaryImage";
import ProductInput from "../../inputs/ProductInput";

const css = {
  wrapperProduct:
    `h-max min-w-[80vw] sm:min-w-110 flex flex-col items-end shadow-lg 
     hover:shadow-lg-hover hover:scale-101 fast-trans br-lg  overflow-hidden`,
  wrapperImgs:
    `w-full min-h-[80vw] sm:min-h-[480px] md:h-[480px] flex relative bg-white rounded-none`,
};

const MainProductCard = ({
  item,
  sectionEditMode,
}: {
  item: HomeClothing;
  sectionEditMode: boolean;
}): React.ReactElement => {
  /* inputs de edição */

  return (
    <div className={`${css.wrapperProduct}`}>
      {!sectionEditMode ? (
        <>
          <div className={`${css.wrapperImgs}`} id="wrapperImgs">
            <FavoriteButton />
            <SecondaryImage item={item} />
            <MainImage item={item} />
          </div>
          <ProductInfo item={item} />
        </>
      ) : (
        <ProductInput id={item.id} />
      )}
    </div>
  );
};

export default MainProductCard;
