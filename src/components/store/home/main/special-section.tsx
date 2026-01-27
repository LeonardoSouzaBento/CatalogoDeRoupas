import React, { useState } from 'react';
import Base from './clothes-section/base';
import type { HomeClothing } from '@/types/types';
import {
  specialMensClothingData,
  specialWomensClothingData,
  specialBoysClothingData,
  specialGirlsClothingData,
} from '@/data/home/homeData';

export const SpecialSection = ({ resizeCount }: { resizeCount: number }) => {
  const [mensClothing, setMensClothing] = useState<HomeClothing[]>(specialMensClothingData);
  const [womensClothing, setWomensClothing] = useState<HomeClothing[]>(specialWomensClothingData);
  const [boysClothes, setBoysClothes] = useState<HomeClothing[]>(specialBoysClothingData);
  const [girlsClothes, setGirlsClothes] = useState<HomeClothing[]>(specialGirlsClothingData);
  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <div>
      <Base
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
        editMode={editMode}
        setEditMode={setEditMode}
        resizeCount={resizeCount}
      />
    </div>
  );
};
