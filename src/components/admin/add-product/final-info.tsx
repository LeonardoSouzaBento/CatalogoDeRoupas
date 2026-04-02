import {
  ButtonsWrapper,
  Card,
  CardHeader,
  CardTitle,
  Icon,
  MuiIcon,
} from "@/components/ui";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Brand,
  ColorPicker,
  CompositionEditor,
  Description,
  Differential,
  Price,
  SizeSelector,
} from "./final-info/index";

//cores, tamanhos, composição, preço, marca, descrição, diferencial,

const properties = {
  Composição: CompositionEditor,
  "Tamanhos disponiveis": SizeSelector,
  Descrição: Description,
  Preço: Price,
  Marca: Brand,
  Diferencial: Differential,
  Cores: ColorPicker,
};

const FinalInfo = () => {
  const [selectedPropertie, setSelectedPropertie] = useState<string>("Composição");

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="edit_note" size="h3" fill />
          <h4>Demais informações</h4>
        </CardTitle>
      </CardHeader>

      <ButtonsWrapper>
        {Object.entries(properties).map(([name, Component]) => {
          const trigger = (
            <Button
              data-option
              size="sm"
              variant="ghost"
              data-selected={selectedPropertie === name}
              onClick={() => {
                setSelectedPropertie(name);
              }}
            >
              {name}
              <Icon Svg={ChevronDown} />
            </Button>
          );

          if (name === "Cores") {
            const ColorPickerComponent = Component as typeof ColorPicker;
            return (
              <ColorPickerComponent
                key={name}
                trigger={trigger}
                imageSrc="/shop/photos/female/mainCategories/blusas.png"
              />
            );
          }

          const GenericComponent = Component as React.FC<{
            trigger: React.ReactNode;
          }>;
          return <GenericComponent key={name} trigger={trigger} />;
        })}
      </ButtonsWrapper>
    </Card>
  );
};

export { FinalInfo };

