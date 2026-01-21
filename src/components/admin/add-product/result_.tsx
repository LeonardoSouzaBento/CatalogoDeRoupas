import { MuiIcon } from '@/components/ui';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductTable } from './result/index';

const Result = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="equal" size="h3" className="mr-1" />
          <h3>Resultado</h3>
        </CardTitle>
        <CardDescription>Resultado</CardDescription>
      </CardHeader>
      <ProductTable />
    </Card>
  );
};

export { Result };
