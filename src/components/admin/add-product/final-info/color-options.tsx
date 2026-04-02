import React from 'react';
import { Button } from '@/components/ui/button';
import { colorFamilies } from '@/data/clothings/colors';
import { colorsByFamily } from '@/data/clothings/colors';
import type { StateSetter } from '@/types/types';
import { ChevronDown, Plus, X } from 'lucide-react';
import { Input, Label, InputWrapper } from '@/components/ui';

const ColorOptions = () => {
  const [showColor, setShowColor] = React.useState<boolean>(false);
  const [selectedFamily, setSelectedFamily] = React.useState<string>("");
  const [selectedColor, setSelectedColor] = React.useState<string>("");

  return (
    <div className="flex flex-col gap-2">
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

const ColorFamilySelector = ({
  selectedFamily,
  setSelectedFamily,
}: ColorFamilySelectorProps) => {
  const handleSelectFamily = (family: string) => {
    setSelectedFamily(family);
  };

  return (
    <div className="h-[120px] overflow-y-scroll flex flex-wrap gap-3">
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
  const [selectedColor, setSelectedColor] = React.useState<string>("");

  return (
    <div className="flex flex-wrap gap-3">
      {colorsByFamily[selectedFamily as keyof typeof colorsByFamily].map(
        (color) => {
          const isSelected = selectedColor === color.code;

          return (
            <div key={color.code} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <div
                  style={{ backgroundColor: color.code }}
                  className={`${isSelected ? "border border-gray-300" : "border border-transparent"} w-[20px] h-[20px]`}
                  onClick={() => setSelectedColor(color.code)}
                ></div>
                <p className={`${isSelected ? "font-medium" : ""}`}>
                  {color.name}
                </p>
              </div>
              <Button
                onClick={() => setSelectedColor("")}
                size="icon"
                variant="ghost"
              >
                <X />
              </Button>
            </div>
          );
        }
      )}
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
  return (
    <InputWrapper className="flex flex-col gap-2">
      <Label htmlFor="color-name">Escolha a da cor</Label>
      <Input
        id="color-name"
        type="text"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      />
      <Button onClick={() => {}}>Adicionar</Button>
    </InputWrapper>
  );
};
