import React from "react";
import Button from "@/app/loja/_ui/button";
import { colorFamilies } from "@/data/clothingData/colors";
import { colorsByFamily } from "@/data/clothingData/colors";
import { StateSetter } from "@/types/types";
import { ChevronDown, Plus, X } from "lucide-react";
import { iconMd } from "@/app/lucideIconStyles";

const css = {
  wrapper: `flex flex-col gap-2`,
};

const ColorOptions = () => {
  const [showColorInput, setShowColorInput] = React.useState<boolean>(false);
  const [selectedFamily, setSelectedFamily] = React.useState<string>("");
  const [selectedColor, setSelectedColor] = React.useState<string>("");

  return (
    <div className={css.wrapper}>
      <h2>Opções de cores</h2>

      <ColorFamilySelector
        selectedFamily={selectedFamily}
        setSelectedFamily={setSelectedFamily}
      />
      {selectedFamily && <ColorList selectedFamily={selectedFamily} />}

      <Button
        onClick={() => setShowColorInput(!showColorInput)}
        icon={<Plus {...iconMd} />}
      >
        Quero outra cor
      </Button>
      {showColorInput && (
        <ColorInput
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      )}
    </div>
  );
};

export default ColorOptions;

/* ---------- ColorGroups ---------- */
interface ColorFamilySelectorProps {
  selectedFamily: string;
  setSelectedFamily: StateSetter<string>;
}

const ColorFamilySelector = ({
  selectedFamily,
  setSelectedFamily,
}: ColorFamilySelectorProps) => {
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
          styles={`${selectedFamily === family.id ? "flex" : "hidden"}`}
          icon=""
        >
          <h3>{family.name}</h3>

          <ChevronDown {...iconMd} className={`shrink-0`} />

          {selectedFamily === family.id && (
            <div onClick={() => setSelectedFamily("")}>
              <X {...iconMd} />
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
    name: `p16`,
    selected: `border border-gray-300`,
    notSelected: `border border-transparent`,
  };

  const [selectedColor, setSelectedColor] = React.useState<string>("");

  return (
    <div className={css.container}>
      {colorsByFamily[selectedFamily as keyof typeof colorsByFamily].map(
        (color) => {
          const isSelected = selectedColor === color.code;

          return (
            <div key={color.code} className={css.wrapper}>
              <div className={css.colorBox}>
                <div
                  style={{ backgroundColor: color.code }}
                  className={`${isSelected ? css.selected : css.notSelected} ${
                    css.color
                  }`}
                  onClick={() => setSelectedColor(color.code)}
                ></div>
                <p className={`${css.name} ${isSelected ? "font-medium" : ""}`}>
                  {color.name}
                </p>
              </div>
              <Button onClick={() => setSelectedColor("")} squareOrCircular>
                <X {...iconMd} color="red" />
              </Button>
            </div>
          );
        }
      )}
    </div>
  );
};

/* ---------- ColorInput ---------- */
const ColorInput = ({
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
      <input
        type="text"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      />
      <Button onClick={() => {}}>Adicionar</Button>
    </div>
  );
};

