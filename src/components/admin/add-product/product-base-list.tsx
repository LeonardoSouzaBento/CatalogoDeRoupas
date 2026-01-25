'use client';
import { ResizableCardTitle } from '@/components/admin/ui/resizable-card-title';
import { CardDescription, CardHeader, CardTitle, MuiIcon } from '@/components/ui';
import { UserContext } from '@/contexts/userContext_';
import { basicFemaleClothes } from '@/data/clothings/basicFemaleClothes';
import { basicMaleClothes } from '@/data/clothings/basicMaleClothes';
import { useContext, useState } from 'react';
import { BaseClothingOptions } from './product-base-list/base-clothing-options';
import { Description } from './product-base-list/description_';

const css = {
  wrapper: `card-styles crop`,
};

const ProductBasesList = ({ resizeCount }: { resizeCount: number }) => {
  const { selectedGender } = useContext(UserContext);
  const [selectedName, setSelectedName] = useState<string>('');

  const clothes = selectedGender === 'masculino' ? basicMaleClothes : basicFemaleClothes;

  const [expand, setExpand] = useState<boolean>(false);
  const [divHeight, setDivHeight] = useState<string | null>('');

  return (
    <div className={css.wrapper} style={{ height: expand ? 'auto' : divHeight || 'auto' }}>
      <ResizableCardTitle
        expand={expand}
        setExpand={setExpand}
        setDivHeight={setDivHeight}
        valueToFixHeight={12}
        buttonStyles="mt-4!"
        resizeCount={resizeCount}>
        <CardHeader>
          <CardTitle>
            <MuiIcon icon="apparel" size="h3" className="mr-1" />
            <h3>Roupa base (opcional)</h3>
          </CardTitle>
          <CardDescription>Adicione informações mais rapidamente</CardDescription>
        </CardHeader>
      </ResizableCardTitle>

      <BaseClothingOptions
        clothes={clothes}
        selectedName={selectedName}
        setSelectedName={setSelectedName}
      />

      <Description selectedName={selectedName} />
    </div>
  );
};

export { ProductBasesList };
