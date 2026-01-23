'use client';
import React, { useContext, useState } from 'react';
import { Button } from '@/components/ui/button';

import { Eye } from 'lucide-react';
import { UserContext } from '@/contexts/index';
import { letterSizes } from '@/data/clothings/sizes';
import { numericalSizes } from '@/data/clothings/sizes';
import { childNumericalSizes } from '@/data/clothings/sizes';

// interface Props {}

const SizeSelector = () => {
  const { childCatSelected } = useContext(UserContext);
  const [seeNumericalSizes, setSeeNumericalSizes] = useState<boolean>(false);

  return (
    <div>
      <h2>Selecione um tamanho</h2>
      <SizeList dataList={letterSizes} />
      {seeNumericalSizes && <SizeList dataList={numericalSizes} />}
      {childCatSelected && <SizeList dataList={childNumericalSizes} />}

      <Button
        onClick={() => {
          setSeeNumericalSizes(!seeNumericalSizes);
        }}>
        Ver medidas numéricas
        <Eye />
      </Button>

      {childCatSelected && (
        <Button
          onClick={() => {
            setSeeNumericalSizes(!seeNumericalSizes);
          }}>
          Ver medidas numéricas infantis
          <Eye />
        </Button>
      )}
    </div>
  );
};

export { SizeSelector };

interface Props {
  dataList: string[] | number[];
}

const css = {
  wrapper: `flex flex-wrap`,
  wrapperItem: `h-10 min-w-10 flex items-center justify-center`,
  p: ``,
  notSelected: ` p-0`,
  selected: ` p-0`,
};

const SizeList = ({ dataList }: Props) => {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className={css.wrapper}>
      {dataList.map((size) => (
        <button
          key={size}
          className={`${css.wrapperItem} ${selectedSize === size ? css.selected : css.notSelected}`}
          onClick={() => handleSelectSize(size.toString())}>
          <p className={css.p}>{size.toString()}</p>
        </button>
      ))}
    </div>
  );
};
