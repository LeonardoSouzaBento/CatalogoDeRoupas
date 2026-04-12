import { ButtonsWrapper, Icon } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { sortValues } from "@/utils/utils";
import { X } from "lucide-react";
import { OptionsWrapper } from "@/components/admin/add-product/common";

interface ButtonProps {
  clothes: string[];
  selectedName: string;
  setSelectedName: (value: string) => void;
}

const BaseClothingOptions = ({
  clothes,
  selectedName,
  setSelectedName,
}: ButtonProps) => {
  const sortedClothes = sortValues(clothes);
  return (
    <OptionsWrapper title="Selecione um modelo">
      <ButtonsWrapper className="mb-5">
        {sortedClothes.map((item, index) => {
          const shortName = item.split("–")[0].trim();
          const selected = selectedName === item;
          return (
            <Button
              data-option
              selected={selected}
              key={index}
              size={"sm"}
              variant="ghost"
              className={`rounded-full px-6 transition-all duration-150
              relative max-[400px]:w-full sm:min-w-60 ${selected && "pr-13"}`}
              onClick={() => setSelectedName(item)}
            >
              {shortName}
              {selected && (
                <Button
                  asChild
                  size="icon-sm"
                  variant="secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedName("");
                  }}
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full hover:shadow-lg"
                >
                  <div role="button" aria-roledescription="button" tabIndex={0}>
                    <Icon Svg={X} className="text-destructive" />
                  </div>
                </Button>
              )}
            </Button>
          );
        })}
      </ButtonsWrapper>
    </OptionsWrapper>
  );
};

export { BaseClothingOptions };
