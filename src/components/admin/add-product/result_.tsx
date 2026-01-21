import React from 'react';
import { HeaderCard } from '@/app/_ui';
import ProductTable from './ProductTable';
import { Card } from '@/components/ui/card';

const Result = () => {
  return (
    <Card>
      <HeaderCard title="Resultado" icon="equal" iconStyles="" />
      <ProductTable />
    </Card>
  );
};

export { Result };
