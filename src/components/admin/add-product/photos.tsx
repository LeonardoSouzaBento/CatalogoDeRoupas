'use client';
import { MuiIcon } from '@/components/ui';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { PhotoGridEditor } from './_photos/photo-grid-editor';

const Photos = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="photo_library" size="h4" fill />
          <h3>Fotos</h3>
        </CardTitle>
      </CardHeader>
      <PhotoGridEditor />
      <Alert variant="destructive" className="bg-gray-50/50 mb-0">
        <AlertCircle />
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

