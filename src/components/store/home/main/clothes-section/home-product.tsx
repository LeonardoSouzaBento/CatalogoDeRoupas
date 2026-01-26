import { FavoriteButton } from '@/components/ui/favorite-button';
import type { HomeClothing } from '@/types/types';
import { ProductInput } from './product-input/product-input_';
import Image from 'next/image';

const css = {
  wrapperProduct: `h-max min-w-[80vw] sm:min-w-110 flex flex-col items-end shadow-lg 
     hover:shadow-lg-hover hover:scale-101 default-fast-transition rounded-lg  overflow-hidden`,
  wrapperImgs: `w-full h-[80vw] max-h-120 
  grid grid-cols-[1fr_1.5fr] relative bg-white rounded-none`,
};

const HomeProduct = ({
  item,
  sectionEditMode,
}: {
  item: HomeClothing;
  sectionEditMode: boolean;
}): React.ReactElement => {
  const images = [item.img1, item.img2];

  return (
    <div className={`${css.wrapperProduct}`}>
      {!sectionEditMode ? (
        <>
          <div className={`${css.wrapperImgs}`} id="wrapperImgs">
            <FavoriteButton />
            {images.map((image, index) => (
              <div key={index} className={`relative w-full p-2`}>
                <Image
                  src={image}
                  alt={`Img do produto: ${item.alt}`}
                  fill={true}
                  className="size-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="w-full px-5 py-4 bg-light-bg border-t border-border/30">
            <p className="capitalize">{item.name}</p>
            <p className="large-text font-semibold">R${item.price}</p>
          </div>
        </>
      ) : (
        <ProductInput id={item.id} />
      )}
    </div>
  );
};

export { HomeProduct };
