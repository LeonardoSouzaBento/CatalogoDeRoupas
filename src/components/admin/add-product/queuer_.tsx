'use client';
import React from 'react';
import { QueuerButton } from './_queuer/queuer-button';
import { QuantitySelector } from './_queuer/quantity-selector';
import type { StateSetter } from '@/types/types';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MuiIcon } from '@/components/ui';

interface Props {
  selectedQuantity: number;
  setSelectedQuantity: StateSetter<number>;
}

const Queuer = ({ selectedQuantity, setSelectedQuantity }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="layers" size="h3" className="mr-1" />
          <h3>Enfileirar produtos</h3>
        </CardTitle>
        <CardDescription>Fazer cópias editáveis desse produto</CardDescription>
      </CardHeader>

      <QuantitySelector
        selectedQuantity={selectedQuantity}
        setSelectedQuantity={setSelectedQuantity}
      />
      <QueuerButton selectedQuantity={selectedQuantity} />
    </Card>
  );
};

export { Queuer };
