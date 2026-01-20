import FavoriteButton from '@/app/_ui/favorite-button';
import type { HomeClothing } from '@/types/types';
import { MainImage } from './MainCardProduct/components/MainImage';
import ProductInfo from './MainCardProduct/components/ProductInfo';
import { SecondaryImage } from './MainCardProduct/components/SecondaryImage';
import Product from '../home/main/clothes-section/s/Product';

const css = {
  wrapperProduct: `h-max min-w-[80vw] sm:min-w-110 flex flex-col items-end shadow-lg 
     hover:shadow-lg-hover hover:scale-101 fast-trans br-lg  overflow-hidden`,
  wrapperImgs: `w-full min-h-[80vw] sm:min-h-[480px] md:h-[480px] flex relative bg-white rounded-none`,
};

const HomeProduct = ({
  item,
  sectionEditMode,
}: {
  item: HomeClothing;
  sectionEditMode: boolean;
}): React.ReactElement => {
  /* s de edição */

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
        <Product id={item.id} />
      )}
    </div>
  );
};

export default HomeProduct;
