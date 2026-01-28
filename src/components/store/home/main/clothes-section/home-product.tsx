import { FavoriteButton } from '@/components/ui/favorite-button';
import type { HomeClothing } from '@/types/types';
import { ProductInput } from './product-input/product-input_';
import Image from 'next/image';

const css = {
  productWrapper: `h-max min-w-[80vw] sm:min-w-110 flex flex-col items-end shadow-md select-none
     hover:shadow-lg-hover hover:scale-101 transition-200 rounded-md overflow-hidden`,
  imagesWrapper: `w-full h-[80vw] max-h-120 select-none relative
  grid grid-cols-[1fr_1.5fr] relative bg-light-bg rounded-none`,
};

const HomeProduct = ({
  item,
  editMode,
}: {
  item: HomeClothing;
  editMode: boolean;
}): React.ReactElement => {
  const images = [item.img1, item.img2];

  return (
    <div className={`${css.productWrapper}`}>
      {!editMode ? (
        <>
          <div className={`${css.imagesWrapper}`} id="wrapperImgs">
            <FavoriteButton />
            {images.map((image, index) => (
              <div key={index} className={`relative w-full p-2 [&_img]:select-none`}>
                <Image
                  src={image}
                  alt={`Img do produto: ${item.alt}`}
                  fill
                  className="size-full object-cover"
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-transparent z-4"></div>
          </div>
          <div
            className={`w-full px-5 py-4 bg-light-bg border-t 
            border-border/50 select-none [&_p]:select-none`}>
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
