'use client';
import { ResizableCardTitle } from '@/components/admin/ui/resizable-card-title';
import { Card, CardDescription, CardHeader, CardTitle, MuiIcon } from '@/components/ui';
import { UserContext } from '@/contexts/userContext_';
import { basicFemaleClothes } from '@/data/clothings/basicFemaleClothes';
import { basicMaleClothes } from '@/data/clothings/basicMaleClothes';
import { useContext, useRef, useState } from 'react';
import { BaseClothingOptions } from './product-base-list/base-clothing-options';
import { Description } from './product-base-list/description_';

const ProductBasesList = ({ resizeCount }: { resizeCount: number }) => {
  const { selectedGender } = useContext(UserContext);
  const [selectedName, setSelectedName] = useState<string>('');
  const cardRef = useRef<HTMLDivElement | null>(null);

  const clothes = selectedGender === 'masculino' ? basicMaleClothes : basicFemaleClothes;

  return (
    <Card ref={cardRef} className="crop">
      <ResizableCardTitle cardRef={cardRef} cssButton="mt-4" pb={16}>
        <CardHeader>
          <CardTitle>
            <MuiIcon icon="apparel" size="h4" fill />
            <h3>Roupa base</h3>
          </CardTitle>
          <CardDescription>Adicione informações mais rapidamente (opcional)</CardDescription>
        </CardHeader>
      </ResizableCardTitle>

      <BaseClothingOptions
        clothes={clothes}
        selectedName={selectedName}
        setSelectedName={setSelectedName}
      />

      <Description selectedName={selectedName} />
    </Card>
  );
};

export { ProductBasesList };
