import React from 'react';
import { Button } from '@/components/ui/button';
import { colorFamilies } from '@/data/clothings/colors';
import { colorsByFamily } from '@/data/clothings/colors';
import { StateSetter } from '@/types/types';
import { ChevronDown, Plus, X } from 'lucide-react';
import { Input } from '@/components/ui';

const css = {
  wrapper: `flex flex-col gap-2`,
};

const ColorOptions = () => {
  const [showColor, setShowColor] = React.useState<boolean>(false);
  const [selectedFamily, setSelectedFamily] = React.useState<string>('');
  const [selectedColor, setSelectedColor] = React.useState<string>('');

  return (
    <div className={css.wrapper}>
      <h2>Opções de cores</h2>

      <ColorFamilySelector selectedFamily={selectedFamily} setSelectedFamily={setSelectedFamily} />
      {selectedFamily && <ColorList selectedFamily={selectedFamily} />}

      <Button onClick={() => setShowColor(!showColor)}>
        Quero outra cor
        <Plus />
      </Button>
      {showColor && <Color selectedColor={selectedColor} setSelectedColor={setSelectedColor} />}
    </div>
  );
};

export { ColorOptions };

/* ---------- ColorGroups ---------- */
interface ColorFamilySelectorProps {
  selectedFamily: string;
  setSelectedFamily: StateSetter<string>;
}

const ColorFamilySelector = ({ selectedFamily, setSelectedFamily }: ColorFamilySelectorProps) => {
  const css = {
    wrapper: `h-[120px] overflow-y-scroll flex flex-wrap gap-3`,
  };

  const handleSelectFamily = (family: string) => {
    setSelectedFamily(family);
  };

  return (
    <div className={css.wrapper}>
      {colorFamilies.map((family) => (
        <Button
          key={family.id}
          onClick={() => handleSelectFamily(family.id)}
          className={selectedFamily === family.id ? 'flex' : 'hidden'}>
          <h3>{family.name}</h3>
          <ChevronDown className="shrink-0" />
          {selectedFamily === family.id && (
            <div onClick={() => setSelectedFamily('')}>
              <X />
            </div>
          )}
        </Button>
      ))}
    </div>
  );
};

/* ---------- ColorList ---------- */

const ColorList = ({ selectedFamily }: { selectedFamily: string }) => {
  const css = {
    container: `flex flex-wrap gap-3`,
    wrapper: `flex items-center gap-2`,
    colorBox: `flex flex-col items-center gap-1`,
    color: `w-[20px] h-[20px]`,
    name: ``,
    selected: `border border-gray-300`,
    notSelected: `border border-transparent`,
  };

  const [selectedColor, setSelectedColor] = React.useState<string>('');

  return (
    <div className={css.container}>
      {colorsByFamily[selectedFamily as keyof typeof colorsByFamily].map((color) => {
        const isSelected = selectedColor === color.code;

        return (
          <div key={color.code} className={css.wrapper}>
            <div className={css.colorBox}>
              <div
                style={{ backgroundColor: color.code }}
                className={`${isSelected ? css.selected : css.notSelected} ${css.color}`}
                onClick={() => setSelectedColor(color.code)}></div>
              <p className={`${css.name} ${isSelected ? 'font-medium' : ''}`}>{color.name}</p>
            </div>
            <Button onClick={() => setSelectedColor('')} size="icon" variant="ghost">
              <X />
            </Button>
          </div>
        );
      })}
    </div>
  );
};

/* ---------- Color ---------- */
const Color = ({
  selectedColor,
  setSelectedColor,
}: {
  selectedColor: string;
  setSelectedColor: StateSetter<string>;
}) => {
  const css = {
    wrapper: `flex flex-col gap-2`,
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor="colorName">Escolha a da cor</label>
      <Input type="text" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} />
      <Button onClick={() => {}}>Adicionar</Button>
    </div>
  );
};
