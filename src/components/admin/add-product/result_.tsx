import React from 'react';
import { HeaderCard } from '@/app/_ui';
import ProductTable from './ProductTable';
import CardWrapper from '@/components/ui/card-wrapper';

const Result = () => {
  return (
    <CardWrapper>
      <HeaderCard title="Resultado" icon="equal" iconStyles="" />
      <ProductTable />
    </CardWrapper>
  );
};

export { Result };
