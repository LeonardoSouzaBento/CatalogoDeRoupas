import { HomeClothing } from "@/types/types";

const css = {
  wrapperInfo: "w-full h-max p-6 flex flex-col items-start gap-3 bg-white br-0",
  priceP: "font-bold text-[hsl(280_70%_40%)]",
};

const ProductInfo = ({
  item,
}: {
  item: HomeClothing;
}) => {
  return (
    <div className={`${css.wrapperInfo}`}>
      <>
        <p className="capitalize">{item.name}</p>
        <p className={`${css.priceP}`}>R${item.price}</p>
      </>
    </div>
  );
};

export default ProductInfo;
