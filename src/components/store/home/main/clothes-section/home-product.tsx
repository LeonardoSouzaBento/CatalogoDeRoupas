import { FavoriteButton } from '@/components/ui/favorite-button';
import type { HomeClothing } from '@/types/types';
import { ProductInput } from './product-input/product-input_';
import Image from 'next/image';

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
        <ProductInput id={item.id} />
      )}
    </div>
  );
};

export { HomeProduct };

/* Imagem principal */
const MainImage = ({ item }: { item: HomeClothing }) => {
  const css = {
    wrapperImg: 'p-2 min-w-[60%] relative',
    img: 'size-full object-cover',
  };
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

const SecondaryImage = ({ item }: { item: HomeClothing }) => {
  const css = {
    wrapperImg: 'p-2 min-w-[40%] relative',
    img: 'size-full object-cover',
  };
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

const ProductInfo = ({ item }: { item: HomeClothing }) => {
  return (
    <div>
      <p className="capitalize">{item.name}</p>
      <p>R${item.price}</p>
    </div>
  );
};
