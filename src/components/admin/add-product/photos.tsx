import { Icon, MuiIcon } from '@/components/ui';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { PhotoGridEditor } from './_photos/photo-grid-editor';

const Photos = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="photo_library" size="h6" fill className='mr-0.75' />
          <h4>Fotos</h4>
        </CardTitle>
      </CardHeader>
      <PhotoGridEditor />
      <Alert variant="destructive" className="mb-0">
        <Icon Svg={Info} size='h6' strokeWidth="medium" />
        <AlertTitle><h5>Dica de Ouro</h5></AlertTitle>
        <AlertDescription>
          Adicione pelo menos três fotos para cada roupa (frente, costas e o tecido visto de perto).
          O mais recomendado é adicionar 5 fotos , mostrando também a lateral da peça e a peça sendo
          usada por uma pessoa. Assim o cliente se mantêm interessado.
        </AlertDescription>
      </Alert>
    </Card>
  );
};

export { Photos };

