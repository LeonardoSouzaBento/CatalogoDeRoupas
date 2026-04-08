import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

import { OptionsWrapper } from "@/components/admin/add-product/common/index";
import { Button, ButtonsWrapper } from "@/components/ui";
import { useUserContext } from "@/contexts/index";
import {
  childNumericalSizes,
  letterSizes,
  numericalSizes,
} from "@/data/clothings/sizes";
import { StateSetter } from "@/types";

// interface Props {}

const SizeSelector = ({ trigger }: { trigger: React.ReactNode }) => {
  const { childCatSelected } = useUserContext();
  const [selectedSize, setSelectedSize] = useState<string>("");

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Tamanhos disponíveis</DialogTitle>
        </DialogHeader>
        <div className="mt-2">
          <OptionsWrapper title="Selecione os tamanhos">
            <div className="mb-4">
              <SizeList
                dataList={letterSizes}
                title="Medidas"
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
              <SizeList
                dataList={numericalSizes}
                className="mt-4"
                title="Medidas numéricas"
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
              {childCatSelected && (
                <SizeList
                  dataList={childNumericalSizes}
                  title="Medidas numéricas infantis"
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                />
              )}
            </div>
          </OptionsWrapper>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { SizeSelector };

interface SizeListProps {
  dataList: string[] | number[];
  className?: string;
  title: string;
  selectedSize: string;
  setSelectedSize: StateSetter<string>;
}

const SizeList = ({
  dataList,
  className,
  title,
  selectedSize,
  setSelectedSize,
}: SizeListProps) => {
  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className={className}>
      <p className="small-text text-muted-foreground mb-2 tracking-wide">
        {title}
      </p>
      <ButtonsWrapper>
        {dataList.map((size) => (
          <Button
            key={size}
            data-option
            selected={selectedSize === size.toString()}
            variant={"ghost"}
            size="sm"
            onClick={() => handleSelectSize(size.toString())}
          >
            {size.toString()}
          </Button>
        ))}
      </ButtonsWrapper>
    </div>
  );
};
