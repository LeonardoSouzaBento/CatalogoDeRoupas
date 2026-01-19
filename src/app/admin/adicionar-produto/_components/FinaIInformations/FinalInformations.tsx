import React from 'react';
import DescriptionInput from './components/describeInput';
import SizeSelector from './components/sizesSelector';
import CompositionEditor from './components/composeEditor';
import { HeaderCard } from '@/app/_ui';
import CardWrapper from '@/app/_ui/card-wrapper';
import ColorPicker from './components/colorPicker';
import PriceInput from './components/priceInput';
import BrandInput from './components/brandInput';
import DifferentialInput from './components/differentialInput';
import Button from '@/app/_ui/button';
import { ChevronDown } from 'lucide-react';
import { iconMd } from '@/app/css/lucideIconStyles';
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
            icon={<ChevronDown {...iconMd} />}>
            {property}
          </Button>
        ))}
      </WrapperButtons>

      <div className={`bs`}>
        {selectedPropertie === 'Composição' && <CompositionEditor />}
        {selectedPropertie === 'Tamanhos disponiveis' && <SizeSelector />}
        {selectedPropertie === 'Descrição' && <DescriptionInput />}
        {selectedPropertie === 'Preço' && <PriceInput />}
        {selectedPropertie === 'Marca' && <BrandInput />}
        {selectedPropertie === 'Diferencial' && <DifferentialInput />}
        {selectedPropertie === 'Cores' && (
          <ColorPicker imageSrc="/shop/photos/female/mainCategories/blusas.png" />
        )}
      </div>
    </CardWrapper>
  );
};

export default FinalInformations;
