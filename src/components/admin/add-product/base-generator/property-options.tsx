import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { BasicClothingInformation, mappingPropToKey } from '@/types/types';
import { WrapperOptions } from '@/components/admin/ui/wrapper-options';

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
    <WrapperOptions wrapperCss={`p-4 pt-3 border bg-light-bg border-b-transparent rounded-t-md`}>
      <div className={`flex flex-wrap gap-4`}>
        {options.map((option) => {
          const isSelected =
            key && basicInformation[key]?.toString().toLowerCase() === option.toLowerCase();

          return (
            <Button
              key={option}
              data-option
              variant="ghost"
              selected={isSelected}
              onClick={() => propSelected && handleSelectOption(propSelected, option)}>
              {option}
            </Button>
          );
        })}
        {propSelected === 'Subcategoria' && options.length === 0 && (
          <p>Selecione uma categoria primeiro.</p>
        )}
      </div>
    </WrapperOptions>
  );
};

export { PropertyOptions };
