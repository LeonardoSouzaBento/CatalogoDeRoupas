import {
  Button,
  ButtonsWrapper,
  Input,
  InputWrapper,
  Label,
} from "@/components/ui";
import { useState } from "react";

export const MaterialQuantities = ({
  materials = ["Algodão", "Poliéster", "Elastano"],
}: {
  materials?: string[];
}) => {
  const [selectedMaterial, setSelectedMaterial] = useState<string>(
    materials[0],
  );
  const [materialQuantities, setMaterialQuantities] = useState<{
    [key: string]: number;
  }>({
    Algodão: 0,
    Poliéster: 0,
    Elastano: 0,
  });

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 mb-4 mt-1">
        <ButtonsWrapper>
          {materials.map((item) => (
            <Button
              data-option
              variant={"ghost"}
              size={"sm"}
              selected={item === selectedMaterial}
              key={item}
              onClick={() => setSelectedMaterial(item)}
            >
              {item}
            </Button>
          ))}
        </ButtonsWrapper>
        <div className="grid grid-cols-[auto_1fr] items-end gap-2">
          <InputWrapper>
            <Label>Porcentagem</Label>
            <Input
              type="number"
              placeholder="80"
              onChange={(e) => {
                setMaterialQuantities((prev) => ({
                  ...prev,
                  [selectedMaterial]: Number(e.target.value),
                }));
              }}
              value={materialQuantities[selectedMaterial] || ""}
            />
          </InputWrapper>
          <ButtonsWrapper className="flex-nowrap">
            {["-10", "+10"].map((item) => (
              <Button key={item} variant="ghost" size="sm" data-option>
                {item}%
              </Button>
            ))}
          </ButtonsWrapper>
        </div>
      </div>
      <div className="border-t pt-2 mt-5">
        <p className="small-text text-muted-foreground mb-2 tracking-wide uppercase">
          Composição
        </p>
        <ButtonsWrapper className="gap-5">
          {Object.entries(materialQuantities).map(([key, value]) => (
            <span key={key}>
              <span>{key} - </span>
              <span>{value}%</span>
            </span>
          ))}
        </ButtonsWrapper>
      </div>
    </div>
  );
};
