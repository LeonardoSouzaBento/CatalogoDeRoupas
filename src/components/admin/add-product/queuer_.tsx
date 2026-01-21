'use client';
import React from 'react';
import { HeaderCard } from '@/app/_ui';
import { QueuerButton } from './_queuer/queuer-button';
import { QuantitySelector } from './_queuer/quantity-selector';
import { StateSetter } from '@/types/types';
import { Card } from '@/components/ui/card';

interface Props {
  selectedQuantity: number;
  setSelectedQuantity: StateSetter<number>;
}

const Queuer = ({ selectedQuantity, setSelectedQuantity }: Props) => {
  return (
    <Card>
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
    </Card>
  );
};

export { Queuer };
