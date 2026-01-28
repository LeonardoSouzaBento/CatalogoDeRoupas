import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { BasicClothingInformation, mappingPropToKey } from '@/types/types';
import { WrapperOptions } from '@/components/admin/ui/wrapper-options';

const css = {
  container: `p-5 border bg-light-bg border-b-transparent rounded-br-none rounded-bl-none`,
  wrapperOptions: `flex flex-wrap gap-4`,
};

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
    <WrapperOptions styles={css.container}>
      <div className={css.wrapperOptions}>
        {options.map((option) => {
          const isSelected =
            key && basicInformation[key]?.toString().toLowerCase() === option.toLowerCase();

          return (
            <Button
              key={option}
              variant={isSelected ? 'default' : 'outline'}
              className="rounded-full px-5 h-10 font-normal"
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
