"use client";
import { Button, Card, Icon } from "@/components/ui";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useUserContext } from "@/contexts/index";
import { basicFemaleClothes } from "@/data/clothings/basicFemaleClothes";
import { basicMaleClothes } from "@/data/clothings/basicMaleClothes";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { BaseClothingOptions } from "./product-base-list/base-clothing-options";
import { Description } from "./product-base-list/description";
import { OptionsWrapper } from "./common";

const ProductBasesList = () => {
  const { selectedGender } = useUserContext();
  const [selectedName, setSelectedName] = useState<string>("");

  const clothes =
    selectedGender === "masculino" ? basicMaleClothes : basicFemaleClothes;

  return (
    <Dialog>
      <OptionsWrapper title="Seleção rápida">
        <DialogTrigger asChild>
          <Button
            variant="outline"
            data-round
            className="max-w-max pr-[0.6em]"
            size={"sm"}
          >
            Ver Modelos Comuns
            <Icon
              Svg={ChevronDown}
              size="lg"
              strokeWidth="extralight"
              className="mt-px"
            />
          </Button>
        </DialogTrigger>
      </OptionsWrapper>
      <DialogContent className="w-full max-w-155">
        <div className="w-full max-h-120 overflow-y-scroll">
          <BaseClothingOptions
            clothes={clothes}
            selectedName={selectedName}
            setSelectedName={setSelectedName}
          />
          <Description selectedName={selectedName} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { ProductBasesList };
