import React from "react";
import ProductInfoInput from "../inputs/ProductInfoInput";
import { BooleanSetter, SpecialClothing } from "@/types/types";

const css = {
  wrapperInfo: "w-full h-max p-4 flex flex-col items-start gap-2 bg-white br-0",
  priceP: "font-semibold",
};

const ProductInfo = ({
  item,
  seeProductInfoInput,
  setSeeProductInfoInput,
}: {
  item: SpecialClothing;
  seeProductInfoInput: boolean;
  setSeeProductInfoInput: BooleanSetter;
}) => {
  return (
    <div className={`${css.wrapperInfo}`}>
      {seeProductInfoInput ? (
        <ProductInfoInput
          setSeeProductInfoInput={setSeeProductInfoInput}
          id={item.id}
        />
      ) : (
        <>
          <p>
            {item.name} Lorem ipsum, dolor sit amet consectetur adipisicing
          </p>
          <p className={`${css.priceP}`}>R${item.price}</p>
        </>
      )}
    </div>
  );
};

export default ProductInfo;
