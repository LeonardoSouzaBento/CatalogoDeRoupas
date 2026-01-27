import React, { useState } from 'react';
import Base from './clothes-section/base';
import type { HomeClothing } from '@/types/types';
import { gymMensClothingData, gymWomensClothingData } from '@/data/home/homeData';

export const GymSection = ({ resizeCount }: { resizeCount: number }): React.ReactElement => {
  const [mensClothing, setMensClothing] = useState<HomeClothing[]>(gymMensClothingData);
  const [womensClothing, setWomensClothing] = useState<HomeClothing[]>(gymWomensClothingData);
  const [boysClothes, setBoysClothes] = useState<HomeClothing[]>([]);
  const [girlsClothes, setGirlsClothes] = useState<HomeClothing[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <div>
      <Base
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
        editMode={editMode}
        setEditMode={setEditMode}
        resizeCount={resizeCount}
      />
    </div>
  );
};
