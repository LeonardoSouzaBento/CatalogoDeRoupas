import React from 'react';
import Description from './components/describe';
import SizeSelector from './components/sizesSelector';
import CompositionEditor from './components/composeEditor';
import { HeaderCard } from '@/app/_ui';
import CardWrapper from '@/app/_ui/card-wrapper';
import ColorPicker from './components/colorPicker';
import Price from './components/price';
import Brand from './components/brand';
import Differential from './components/differential';
import Button from '@/app/_ui/button';
import { ChevronDown } from 'lucide-react';

import WrapperButtons from '@/app/admin/_ui/wrapper-buttons';

//cores, tamanhos, composição, preço, marca, descrição, diferencial,

const FinalInformations = () => {
  const [selectedPropertie, setSelectedPropertie] = React.useState<string>('Composição');

  const properties = [
    'Composição',
    'Tamanhos disponiveis',
    'Descrição',
    'Preço',
    'Marca',
    'Diferencial',
    'Cores',
  ];

  return (
    <CardWrapper>
      <HeaderCard
        wrapperTitleStyles="gap-[5px]!"
        title="Demais informações"
        icon="edit_note"
        iconStyles="font-medium!"
      />

      <WrapperButtons styles="bs mb-5">
        {properties.map((property) => (
          <Button
            key={property}
            variant="optionList"
            selected={selectedPropertie === property}
            onClick={() => {
              setSelectedPropertie(property);
            }}
            icon={<ChevronDown  />}>
            {property}
          </Button>
        ))}
      </WrapperButtons>

      <div className={`bs`}>
        {selectedPropertie === 'Composição' && <CompositionEditor />}
        {selectedPropertie === 'Tamanhos disponiveis' && <SizeSelector />}
        {selectedPropertie === 'Descrição' && <Description />}
        {selectedPropertie === 'Preço' && <Price />}
        {selectedPropertie === 'Marca' && <Brand />}
        {selectedPropertie === 'Diferencial' && <Differential />}
        {selectedPropertie === 'Cores' && (
          <ColorPicker imageSrc="/shop/photos/female/mainCategories/blusas.png" />
        )}
      </div>
    </CardWrapper>
  );
};

export default FinalInformations;
