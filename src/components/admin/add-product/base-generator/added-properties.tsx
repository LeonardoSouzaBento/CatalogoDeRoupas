import { Button } from '@/components/ui/button';
import { useContext } from 'react';
import { UserContext } from '@/contexts/index';
import { BasicClothingInformation, mappingPropToKey, StateSetter } from '@/types/types';
import { X } from 'lucide-react';
import { Icon } from '@/components/ui';

const css = {
  wrapper: `border p-4 flex flex-wrap gap-3 rounded-b-md`,
  buttonWrapper: `min-h-10 max-w-max pl-4 pr-1 flex justify-between items-center gap-3 
  bg-light-bg rounded-full border text-sm`,
  name: `capitalize text-gray-800`,
  strong: `font-medium tracking-wide`,
};

const AddedProperties = ({
  basicInformation,
  setBasicInformation,
}: {
  basicInformation: BasicClothingInformation;
  setBasicInformation: StateSetter<BasicClothingInformation>;
}) => {
  const { selectedGender } = useContext(UserContext);
  // transforma em array de pares rotulo/valor
  const infoArray = [
    { label: 'Gênero', value: basicInformation.gender },
    { label: 'Categoria', value: basicInformation.cat },
    { label: 'Subcategoria', value: basicInformation.subcat },
    { label: 'Padrão', value: basicInformation.pattern },
    { label: 'Estampa', value: basicInformation.print },
    {
      label: 'É Infantil',
      value: basicInformation.is_childish,
    },
  ];

  // limpa valor individual
  const clearValue = (label: string) => {
    const key = mappingPropToKey[label as keyof typeof mappingPropToKey];

    if (!key) return;

    const valueToSet = key === 'gender' ? selectedGender : '';

    setBasicInformation((prev) => ({
      ...prev,
      [key]: valueToSet,
    }));
  };

  return (
    <div className={`${css.wrapper}`}>
      {infoArray.map(
        (item) =>
          item.value && (
            <div key={item.label} className={`${css.buttonWrapper}`}>
              <span className={css.name}>
                {item.label}: <strong className={css.strong}>{item.value}</strong>
              </span>
              <Button
                variant="secondary"
                size="icon-sm"
                className="rounded-full text-red-500 hover:text-red-700"
                onClick={() => clearValue(item.label)}>
                <Icon LucideIcon={X} />
              </Button>
            </div>
          ),
      )}
    </div>
  );
};

export { AddedProperties };
