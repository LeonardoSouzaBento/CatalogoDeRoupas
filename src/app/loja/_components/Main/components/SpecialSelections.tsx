import React, { useContext } from "react";
import MainCardProduct from "./MainCardProduct";
import type { SpecialSelectionSchema, GenderKey } from "@/types/types";
import { HomeDataContext } from "@contexts/HomeDataContext";
import HomeTitleSubtitle from "@/app/loja/_ui/HomeTitleSubtitle";
import { shopHomeSection, shopHomeWrapperSection } from "@/data/styles";

const css = {
  wrapper: "crop",
  scrollableDiv: "flex gap-2 pb-10 overflow-x-scroll",
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
    <section className={`${shopHomeSection}`}>
      <div className={`${shopHomeWrapperSection} !pb-0`}>
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
      </div>
    </section>
  );
};

export default SpecialSelections;
