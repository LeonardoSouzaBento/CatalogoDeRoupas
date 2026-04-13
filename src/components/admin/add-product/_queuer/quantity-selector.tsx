import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import type { StateSetter } from "@/types/types";
import { Minus, Plus, X } from "lucide-react";
import { ButtonsWrapper, Icon } from "@/components/ui";

interface Props {
  selectedQuantity: number;
  setSelectedQuantity: StateSetter<number>;
}

export const QuantitySelector = ({
  selectedQuantity,
  setSelectedQuantity,
}: Props) => {
  const [numberOptions, setNumberOptions] = useState<number[]>([1, 2, 3]);

  function incrementAll(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setNumberOptions((prev) => {
      const last = prev[prev.length - 1];
      const nextStart = last + 1;
      return prev.map((_, i) => nextStart + i);
    });
  }

  function decrementAll(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    if (numberOptions[0] !== 1) {
      setNumberOptions((prev) => {
        const first = prev[0];
        const nextStart = first - prev.length;
        return prev.map((_, i) => nextStart + i);
      });
    }
  }

  return (
    <div className="w-full h-max mb-5 gap-3.5 [&_p]:inline-flex">
      <ButtonsWrapper>
        <span>Tenho</span>
        <ButtonsWrapper className="max-w-max">
          <Button
            variant="outline"
            data-round
            size="icon-sm"
            onClick={(e) => {
              incrementAll(e);
            }}
          >
            <Icon Svg={Plus} />
          </Button>
          {numberOptions[0] !== 1 && (
            <Button
              data-round
              variant="outline"
              size="icon-sm"
              onClick={(e) => {
                decrementAll(e);
              }}
            >
              <Icon Svg={Minus} />
            </Button>
          )}
          {numberOptions.map((item, index) => {
            const id = `opt-${item}-${index}`;
            return (
              <Button
                key={id}
                data-option
                variant={"ghost"}
                selected={selectedQuantity === item}
                size="icon-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedQuantity(item);
                }}
              >
                {item}
              </Button>
            );
          })}
        </ButtonsWrapper>
        <span className="relative">
          produtos semelhantes a esse.
          <Button
            variant="secondary"
            size="icon-sm"
            className="absolute -top-4 -right-10 rounded-full shadow-sm text-destructive"
            onClick={() => {
              setNumberOptions([1, 2, 3]);
              setSelectedQuantity(0);
            }}
          >
            <Icon Svg={X} size="lg" strokeWidth="light" />
          </Button>
        </span>
      </ButtonsWrapper>
    </div>
  );
};
