'use client';
import React, { useState } from 'react';
import { StateSetter } from '@/types/types';
import { Minus, Plus, X } from 'lucide-react';

const css = {
  wrapper: `w-full h-max p-5 mb-5 flex flex-wrap items-end j-center gap-3.5 
  border relative`,
  wrapperButtons: `flex gap-3`,
  p: `5`,
  button: `size-9 p-0 flex-center rounded-full`,
  selected: ` border shadow-lg hover:shadow-lg-hover`,
  plusButton: `size-9 flex-center p-0 rounded-full`,
  cancelButton: `p-0 size-9 bg-gray-100/70 flex-center absolute -top-2 -right-2
  rounded-full`,
};

interface Props {
  selectedQuantity: number;
  setSelectedQuantity: StateSetter<number>;
}

export const QuantitySelector = ({ selectedQuantity, setSelectedQuantity }: Props) => {
  const [numberOptions, setNumberOptions] = useState<number[]>([1, 2, 3]);

  function incrementAll(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setNumberOptions((prev) => {
      const last = prev[prev.length - 1];
      const nextStart = last + 1;
      return prev.map((_, i) => nextStart + i);
    });
  }

  function decrementAll(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    if (numberOptions[0] !== 1) {
      setNumberOptions((prev) => {
        const first = prev[0];
        const nextStart = first - prev.length;
        return prev.map((_, i) => nextStart + i);
      });
    }
  }

  return (
    <div className={`${css.wrapper}`}>
      <button
        className={`${css.cancelButton}`}
        onClick={() => {
          setNumberOptions([1, 2, 3]);
          setSelectedQuantity(0);
        }}>
        <X />
      </button>
      <p className={`${numberOptions[0] !== 1 && 'min-[450px]:ml-12'}`}>Tenho</p>

      <div className={`${css.wrapperButtons}`}>
        {numberOptions.map((item, index) => {
          const selected = selectedQuantity === item;
          const id = `opt-${item}-${index}`;

          return (
            <button
              key={id}
              className={`${css.button} ${selected && ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedQuantity(item);
              }}>
              {item}
            </button>
          );
        })}
        <button
          className={`${css.plusButton}`}
          onClick={(e) => {
            incrementAll(e);
          }}>
          <Plus />
        </button>
        {numberOptions[0] !== 1 && (
          <button
            className={`${css.plusButton}`}
            onClick={(e) => {
              decrementAll(e);
            }}>
            <Minus />
          </button>
        )}
      </div>
      <p>produtos semelhantes a esse.</p>
    </div>
  );
};
