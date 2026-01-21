'use client';
import React from 'react';
import { AlertInfo, HeaderCard } from '@/app/_ui';
import { PhotoGridEditor } from './_photos/photo-grid-editor';
import CardWrapper from '@/app/_ui/card-wrapper';

const Photos = () => {
  return (
    <CardWrapper>
      <HeaderCard title="Fotos" icon="photo_library" iconStyles="mr-1 " />
      <PhotoGridEditor />
      <AlertInfo
        styles="bg-gray-50/50! mb-0!"
        text={`Adicione pelo menos três fotos para cada roupa 
        (frente, costas e o tecido visto de perto). O mais recomendado é adicionar 5 fotos
        , mostrando também a lateral da peça e a peça sendo usada por uma pessoa. 
          Assim o cliente se mantêm interessado.`}
      />
    </CardWrapper>
  );
};

export { Photos };
