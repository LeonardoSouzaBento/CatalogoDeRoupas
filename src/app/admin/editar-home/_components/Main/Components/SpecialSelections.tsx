import React, { useContext } from "react";
import MainCardProduct from "./MainCardProduct";
import type { SpecialSelectionSchema, GenderKey } from "@src/types/types";
import { HomeDataContext } from "@src/contexts/HomeDataContext";

const css = {
  section: "pb-0",
  h1: "",
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
    <section className={`${css.section}`}>
      <h1 className={`${css.h1}`}>Seleções especiais</h1>
      <h2>Nossas peças mais bonitas</h2>

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
    </section>
  );
};

export default SpecialSelections;
