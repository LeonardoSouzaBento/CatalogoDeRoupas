import { MuiIcon } from '@/components/ui';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const Queue = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="layers" size="h4" weight={500} fill className='-mr-0.75' />
          <h4>Fila</h4>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export { Queue };

