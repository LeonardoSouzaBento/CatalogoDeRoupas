import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { BasicClothingInformation, mappingPropToKey } from '@/types/types';
import { WrapperOptions } from '@/components/admin/ui/wrapper-options';
import { ButtonsWrapper } from '@/components/ui';

interface Property {
  name: string;
  options?: string[];
}

interface PropertyOptionsProps {
  properties: Property[];
  propSelected: string | null;
  handleSelectOption: (prop: string, option: string) => void;
  basicInformation: BasicClothingInformation;
}

const PropertyOptions = ({
  properties,
  propSelected,
  basicInformation,
  handleSelectOption,
}: PropertyOptionsProps) => {
  // converte o nome mostrado no botão para a chave do estado
  const key = propSelected ? mappingPropToKey[propSelected] : undefined;

  const [options, setOptions] = useState<string[]>(['']);

  useEffect(() => {
    if (propSelected) {
      const property = properties.find((item) => item.name === propSelected);
      if (property && property.options) {
        setOptions(property.options);
      } else {
        setOptions([]);
      }
    }
  }, [propSelected]);

  return (
    <WrapperOptions wrapperCss={`pt-2.5 p-4 bg-light-bg`}>
      <ButtonsWrapper>
        {options.map((option) => {
          const isSelected =
            key && basicInformation[key]?.toString().toLowerCase() === option.toLowerCase();

          return (
            <Button
              key={option}
              data-option
              size="sm"
              variant="ghost"
              data-white
              selected={isSelected}
              onClick={() => propSelected && handleSelectOption(propSelected, option)}>
              {option}
            </Button>
          );
        })}
        {propSelected === 'Subcategoria' && options.length === 0 && (
          <p>Selecione uma categoria primeiro.</p>
        )}
      </ButtonsWrapper>
    </WrapperOptions>
  );
};

export { PropertyOptions };
