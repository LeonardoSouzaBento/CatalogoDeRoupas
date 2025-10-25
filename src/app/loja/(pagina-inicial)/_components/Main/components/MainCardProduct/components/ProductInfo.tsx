import React from "react";
import ProductInfoInput from "../inputs/ProductInfoInput";
import { BoolSetter, SpecialSelectionSchema } from "@/types/types";

const css = {
  wrapperInfo: "w-full h-max p-4 flex flex-col items-start gap-2 bg-white",
  nameP:
    "capitalize text-[1.125em] sm:text-[1.132em] md:text-[1.136em] lg:text-[1.143em] xl:text-[1.150em] 2xl:text-[1.157em]",
  priceP: "font-semibold",
};

const ProductInfo = ({
  item,
  seeProductInfoInput,
  setSeeProductInfoInput,
}: {
  item: SpecialSelectionSchema;
  seeProductInfoInput: boolean;
  setSeeProductInfoInput: BoolSetter;
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
          <p className={`${css.nameP}`}>
            {item.name} Lorem ipsum, dolor sit amet consectetur adipisicing
          </p>
          <p className={`${css.priceP}`}>R${item.price}</p>
        </>
      )}
    </div>
  );
};

export default ProductInfo;
