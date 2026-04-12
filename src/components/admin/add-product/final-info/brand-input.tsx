import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, ButtonsWrapper, Icon, Input } from "@/components/ui";
import { brands } from "@/data/clothings/brands";
import { sortValues } from "@/utils/utils";
import { Plus, Search } from "lucide-react";

const Brand = ({ trigger }: { trigger: React.ReactNode }) => {
  const [brand, setBrand] = useState<string>("");
  const [sortedBrands, setSortedBrands] = useState<string[]>(
    sortValues(brands),
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filteredBrands = sortValues(
      brands.filter((brand) =>
        brand.toLowerCase().includes(value.toLowerCase()),
      ),
    );
    setSortedBrands(filteredBrands);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Marca</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-[auto_max-content] gap-2">
          <Button
            variant={"transparent"}
            asChild
            className="rounded-full p-0 justify-end"
          >
            <div>
              <Input
                type="text"
                placeholder="Digite o nome da marca"
                onChange={handleSearch}
                className="absolute inset-0"
              />
              <Button
                size={"icon-sm"}
                variant={"transparent"}
                className="mr-1 mb-px"
              >
                <Icon Svg={Search} size="lg" />
              </Button>
            </div>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Icon Svg={Plus} size="lg" />
                Adicionar marca
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Adicionar marca</DialogTitle>
              </DialogHeader>
              <Input type="text" placeholder="Digite o nome da marca" />
              <Button>
                <Icon Svg={Plus} />
                Adicionar marca
              </Button>
            </DialogContent>
          </Dialog>
        </div>
        <ButtonsWrapper className="h-36 overflow-y-scroll">
          {sortedBrands.map((item) => (
            <Button
              data-option
              selected={brand === item}
              key={item}
              variant="transparent"
              size="sm"
              onClick={() => {
                setBrand(item);
              }}
            >
              {item}
            </Button>
          ))}
        </ButtonsWrapper>
      </DialogContent>
    </Dialog>
  );
};

export { Brand };
