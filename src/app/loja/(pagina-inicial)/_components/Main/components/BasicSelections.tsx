import { HomeContext, UserContext } from "@/contexts";
import type { GenderKey, SpecialClothing } from "@/types/types";
import HomeTitleSubtitle from "@ui/HomeTitleSubtitle";
import React, { useContext } from "react";
import MainCardProduct from "./MainCardProduct/MainCardProduct";

const css = {
  wrapper: "crop",
  scrollableDiv:
    "flex gap-3 pt-3 px-3 md:px-4 box-border sm:mr-4 pb-9 overflow-x-scroll",
};

type SpecialSelectionsType = Record<GenderKey, SpecialClothing[]>;

const SpecialSelections = (): React.ReactElement => {
  const {
    specialMensClothing,
    specialWomensClothing,
    specialBoysClothes,
    specialGirlsClothes,
  } = useContext(HomeContext);
    const {
    selectedGender,
    selectedChildGender,
  } = useContext(UserContext);

  const specialSelections: SpecialSelectionsType = {
    masculino: specialMensClothing,
    feminino: specialWomensClothing,
    infantil: specialBoysClothes,
  };

  const products = specialSelections[selectedGender];
  const femaleChildProductsSelected =
    selectedChildGender == "feminino" && selectedGender == "infantil";

  return (
    <>
      <HomeTitleSubtitle
        title="Seleções especiais"
        subtitle="Nossas peças mais bonitas"
        section="specialSelections"
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
            {specialGirlsClothes.map((item, index) => (
              <MainCardProduct item={item} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SpecialSelections;
