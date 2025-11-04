import React, { useState } from "react";
import ClothesSection from "../base/ClothesSection";
import { HomeClothing } from "@/types/types";
import {
  gymMensClothingData,
  gymWomensClothingData,
} from "@/data/home/homeData";

const GymClothes = (): React.ReactElement => {
  const [mensClothing, setMensClothing] =
    useState<HomeClothing[]>(gymMensClothingData);
  const [womensClothing, setWomensClothing] = useState<HomeClothing[]>(
    gymWomensClothingData
  );
  const [boysClothes, setBoysClothes] = useState<HomeClothing[]>([]);
  const [girlsClothes, setGirlsClothes] = useState<HomeClothing[]>([]);
  const [sectionEditMode, setSectionEditMode] = useState<boolean>(false);

  return (
    <ClothesSection
      title="Esporte & Academia"
      subtitle="Energia e movimento com estilo"
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

export default GymClothes;
