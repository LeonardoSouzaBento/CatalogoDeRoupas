import { MuiIcon } from '@/components/ui';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const Queue = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="layers" size="h3" weight={500} fill />
          <h3>Fila</h3>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export { Queue };

