import {
  Card,
  CardHeader,
  CardTitle,
  Icon,
  MuiIcon,
  ButtonsWrapper,
} from "@/components/ui";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import React from "react";
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

const FinalInfo = () => {
  const [selectedPropertie, setSelectedPropertie] =
    React.useState<string>("Composição");

  const properties = [
    "Composição",
    "Tamanhos disponiveis",
    "Descrição",
    "Preço",
    "Marca",
    "Diferencial",
    "Cores",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="edit_note" size="h3" fill />
          <h3>Demais informações</h3>
        </CardTitle>
      </CardHeader>

      <ButtonsWrapper className="border mb-5">
        {properties.map((property) => (
          <Button
            key={property}
            variant="ghost"
            data-selected={selectedPropertie === property}
            onClick={() => {
              setSelectedPropertie(property);
            }}
          >
            {property}
            <Icon Svg={ChevronDown} />
          </Button>
        ))}
      </ButtonsWrapper>

      <div className={`bs`}>
        {selectedPropertie === "Composição" && <CompositionEditor />}
        {selectedPropertie === "Tamanhos disponiveis" && <SizeSelector />}
        {selectedPropertie === "Descrição" && <Description />}
        {selectedPropertie === "Preço" && <Price />}
        {selectedPropertie === "Marca" && <Brand />}
        {selectedPropertie === "Diferencial" && <Differential />}
        {selectedPropertie === "Cores" && (
          <ColorPicker imageSrc="/shop/photos/female/mainCategories/blusas.png" />
        )}
      </div>
    </Card>
  );
};

export { FinalInfo };
