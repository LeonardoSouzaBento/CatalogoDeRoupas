import React, { useState } from 'react';
import Base from './clothes-section/base';
import { HomeClothing } from '@/types/types';
import {
  everydayMensClothingData,
  everydayWomensClothingData,
  everydayBoysClothingData,
  everydayGirlsClothingData,
} from '@/data/home/homeData';

export const EverydaySection = (): React.ReactElement => {
  const [mensClothing, setMensClothing] = useState<HomeClothing[]>(everydayMensClothingData);
  const [womensClothing, setWomensClothing] = useState<HomeClothing[]>(everydayWomensClothingData);
  const [boysClothes, setBoysClothes] = useState<HomeClothing[]>(everydayBoysClothingData);
  const [girlsClothes, setGirlsClothes] = useState<HomeClothing[]>(everydayGirlsClothingData);
  const [sectionEditMode, setSectionEditMode] = useState<boolean>(false);

  return (
    <div>
      <Base
        title="Uso diário"
        subtitle="Peças versáteis para o dia a dia"
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
    </div>
  );
};
