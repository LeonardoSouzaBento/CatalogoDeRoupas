import React, { useState } from 'react';
import Base from './clothes-section/base';
import type { HomeClothing } from '@/types/types';
import {
  everydayMensClothingData,
  everydayWomensClothingData,
  everydayBoysClothingData,
  everydayGirlsClothingData,
} from '@/data/home/homeData';

export const EverydaySection = ({ resizeCount }: { resizeCount: number }): React.ReactElement => {
  const [mensClothing, setMensClothing] = useState<HomeClothing[]>(everydayMensClothingData);
  const [womensClothing, setWomensClothing] = useState<HomeClothing[]>(everydayWomensClothingData);
  const [boysClothes, setBoysClothes] = useState<HomeClothing[]>(everydayBoysClothingData);
  const [girlsClothes, setGirlsClothes] = useState<HomeClothing[]>(everydayGirlsClothingData);
  const [editMode, setEditMode] = useState<boolean>(false);

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
        editMode={editMode}
        setEditMode={setEditMode}
        resizeCount={resizeCount}
      />
    </div>
  );
};
