"use client";
import { ChevronDown } from "lucide-react";

import { ButtonsWrapper, Icon } from "@/components/ui";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type {
  BasicClothingInformation,
  ClothingProperty,
  StateSetter,
} from "@/types/types";
import { PropertyOptions } from "./property-options";
import { OptionsWrapper } from "../common";
import { useRef } from "react";

interface Props {
  properties: ClothingProperty[];
  propSelected: string | null;
  setPropSelected: StateSetter<string | null>;
  basicInformation: BasicClothingInformation;
  handleSelectOption: (prop: string, option: string) => void;
}

const Properties = ({
  properties,
  propSelected,
  setPropSelected,
  basicInformation,
  handleSelectOption,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <OptionsWrapper title="Seleção manual" ref={ref}>
      <ButtonsWrapper>
        {properties.map((item) => {
          const isDialog = ["Padrão", "Estampa", "Nome"].includes(item.name);
          const isNome = item.name === "Nome";

          const triggerButton = (
            <Button
              data-option
              size="sm"
              variant={"ghost"}
              onClick={() => {
                setPropSelected(item.name);
              }}
            >
              {item.name}
              <Icon
                Svg={ChevronDown}
                size="lg"
                strokeWidth="extralight"
                className="mt-px"
              />
            </Button>
          );

          if (isDialog) {
            return (
              <Dialog
                key={item.name}
                open={propSelected === item.name}
                onOpenChange={(open) => {
                  if (!open) setPropSelected(null);
                }}
              >
                <DialogTrigger asChild>{triggerButton}</DialogTrigger>
                <DialogContent
                  showCloseButton={false}
                  className={`w-full h-auto max-h-100 overflow-y-auto p-0 rounded-lg ${
                    isNome ? "p-6" : "max-w-lg"
                  }`}
                >
                  <DialogTitle className="sr-only">{item.name}</DialogTitle>
                  {isNome ? (
                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="product-name"
                          className="text-sm font-medium"
                        >
                          Nome inteiro da peça
                        </Label>
                        <Input
                          id="product-name"
                          value={basicInformation.name}
                          onChange={(e) =>
                            handleSelectOption("Nome", e.target.value)
                          }
                          autoFocus
                          placeholder="Ex: Camiseta Algodão Egípcio"
                        />
                      </div>
                    </div>
                  ) : (
                    <PropertyOptions
                      properties={properties}
                      propSelected={item.name}
                      basicInformation={basicInformation}
                      handleSelectOption={handleSelectOption}
                    />
                  )}
                </DialogContent>
              </Dialog>
            );
          }

          return (
            <Popover
              key={item.name}
              open={propSelected === item.name}
              onOpenChange={(open) => {
                if (!open) setPropSelected(null);
              }}
            >
              <PopoverTrigger
                asChild
                onClick={() => {
                  ref.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {triggerButton}
              </PopoverTrigger>
              <PopoverContent
                className="w-80 h-auto max-h-100 overflow-y-auto p-0 rounded-lg border-none shadow-xl"
                align="start"
              >
                <PropertyOptions
                  properties={properties}
                  propSelected={item.name}
                  basicInformation={basicInformation}
                  handleSelectOption={handleSelectOption}
                />
              </PopoverContent>
            </Popover>
          );
        })}
      </ButtonsWrapper>
    </OptionsWrapper>
  );
};

export { Properties };
