import React, { useState } from "react";
import ClothesSection from "../base/ClothesSection";
import { HomeClothing } from "@/types/types";
import {
  specialMensClothingData,
  specialWomensClothingData,
  specialBoysClothingData,
  specialGirlsClothingData,
} from "@/data/home/homeData";

const SpecialClothes = (): React.ReactElement => {
  const [mensClothing, setMensClothing] = useState<HomeClothing[]>(
    specialMensClothingData
  );
  const [womensClothing, setWomensClothing] = useState<HomeClothing[]>(
    specialWomensClothingData
  );
  const [boysClothes, setBoysClothes] = useState<HomeClothing[]>(
    specialBoysClothingData
  );
  const [girlsClothes, setGirlsClothes] = useState<HomeClothing[]>(
    specialGirlsClothingData
  );
  const [sectionEditMode, setSectionEditMode] = useState<boolean>(false);
  
  return (
    <ClothesSection
      title="Seleção especial"
      subtitle="Peças cuidadosamente selecionadas"
      mensClothing={mensClothing}
      womensClothing={womensClothing}
      boysClothes={boysClothes}
      girlsClothes={girlsClothes}
      setMensClothing={setMensClothing}
      setWomensClothing={setWomensClothing}
      setBoysClothes={setBoysClothes}
      setGirlsClothes={setGirlsClothes}
      sectionEditMode={sectionEditMode} 
      setSectionEditMode={setSectionEditMode} 
    />
  );
};

export default SpecialClothes;
