import React, { useContext } from "react";
import MainCardProduct from "./MainCardProduct/MainCardProduct";
import type { SpecialSelectionSchema, GenderKey } from "@/types/types";
import { HomeDataContext } from "@contexts/HomeDataContext";
import HomeTitleSubtitle from "@ui/HomeTitleSubtitle";

const css = {
  wrapper: "crop",
  scrollableDiv: "flex gap-3 pt-2 pb-10 overflow-x-scroll",
};

type SpecialSelectionsType = Record<GenderKey, SpecialSelectionSchema[]>;

const SpecialSelections = (): React.ReactElement => {
  const {
    selectedGender,
    femaleSpecialSelections,
    mensSpecialSelections,
    maleChildSpecialSelections,
    femaleChildSpecialSelections,
    selectedChildGender,
  } = useContext(HomeDataContext);

  const specialSelections: SpecialSelectionsType = {
    masculino: mensSpecialSelections,
    feminino: femaleSpecialSelections,
    infantil: maleChildSpecialSelections,
  };

  const products = specialSelections[selectedGender];
  const femaleChildProductsSelected =
    selectedChildGender == "feminino" && selectedGender == "infantil";

  return (
    <>
      <HomeTitleSubtitle
        title="Seleções especiais"
        subtitle="Nossas peças mais bonitas"
      />
      <div className={`${css.wrapper}`}>
        {!femaleChildProductsSelected ? (
          <div className={`${css.scrollableDiv}`}>
            {products.map((item, index) => (
              <MainCardProduct item={item} key={index} />
            ))}
          </div>
        ) : (
          <div className={`${css.scrollableDiv}`}>
            {femaleChildSpecialSelections.map((item, index) => (
              <MainCardProduct item={item} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SpecialSelections;
