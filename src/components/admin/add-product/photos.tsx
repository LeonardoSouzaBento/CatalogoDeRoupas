'use client';
import React from 'react';
import { HeaderCard } from '@/app/_ui';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { PhotoGridEditor } from './_photos/photo-grid-editor';
import { Card } from '@/components/ui/card';

const Photos = () => {
  return (
    <Card>
      <HeaderCard title="Fotos" icon="photo_library" iconStyles="mr-1 " />
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
