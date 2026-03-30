import { FavoriteButton } from "@/components/ui/favorite-button";
import type { HomeClothing } from "@/types/types";
import { ProductInput } from "./product-input/product-input_";
import Image from "next/image";

const css = {
  productWrapper: `h-max w-[84vw] max-w-104 md:max-w-108 shrink-0 flex flex-col items-end shadow-sm/24 border-shadow select-none
     hover:shadow-md/13 hover:scale-101 transition-200 rounded-lg overflow-hidden`,
  imagesWrapper: `w-full min-h-80 h-[80vw] max-h-120 select-none relative
  grid grid-cols-[1fr_2fr] bp-375:grid-cols-[1fr_1.75fr] sm:grid-cols-[1fr_1.6fr] relative bg-light-bg rounded-none`,
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
              <div
                key={index}
                className={`relative w-full p-2 [&_img]:select-none`}
              >
                <Image
                  src={image}
                  alt={`Img do produto: ${item.alt}`}
                  fill
                  className={`size-full object-cover ${index === 0 ? "py-3" : "px-3"}`}
                />
              </div>
            ))}
          </div>
          <div
            className={`w-full px-5 py-4 bg-light-bg select-none [&_p]:select-none`}
          >
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
