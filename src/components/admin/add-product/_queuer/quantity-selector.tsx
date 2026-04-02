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
    <div
      className="w-full h-max p-5 mb-5 flex flex-wrap items-end justify-center gap-3.5 
  border relative [&_p]:inline-flex"
    >
      <Button
        variant="secondary"
        size="icon"
        className="size-8 absolute -top-2 -right-2 rounded-full shadow-sm"
        onClick={() => {
          setNumberOptions([1, 2, 3]);
          setSelectedQuantity(0);
        }}
      >
        <X size={16} />
      </Button>
      <p className={`${numberOptions[0] !== 1 && "min-[450px]:ml-12"}`}>
        Tenho
      </p>

      <ButtonsWrapper>
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
            variant="outline"
            size="icon"
            className="size-9 rounded-full"
            onClick={(e) => {
              decrementAll(e);
            }}
          >
            <Icon Svg={Minus} />
          </Button>
        )}
      </ButtonsWrapper>
      <p>produtos semelhantes a esse.</p>
    </div>
  );
};
