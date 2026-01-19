'use client';
import React from 'react';
import { HeaderCard } from '@/app/_ui';
import QueuerButton from './components/QueuerButton';
import QuantitySelector from './components/QuantitySelector';
import { StateSetter } from '@/types/types';
import CardWrapper from '@/app/_ui/card-wrapper';

interface Props {
  selectedQuantity: number;
  setSelectedQuantity: StateSetter<number>;
}

const Queuer = ({ selectedQuantity, setSelectedQuantity }: Props) => {
  return (
    <CardWrapper>
      <HeaderCard
        icon="layers"
        title="Enfileirar produtos"
        subtitle="Fazer cópias editáveis desse produto"
        iconStyles=""
      />

      <QuantitySelector
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
      />
      <QueuerButton selectedQuantity={selectedQuantity} />
    </CardWrapper>
  );
};

export default Queuer;
