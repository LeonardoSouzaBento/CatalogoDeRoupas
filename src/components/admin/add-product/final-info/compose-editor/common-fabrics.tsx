import {
  Button,
  ButtonsWrapper,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Icon,
} from "@/components/ui";
import { commonFabrics } from "@/data/clothings/commonFabrics";
import { ChevronDown } from "lucide-react";
import { OptionsWrapper } from "@/components/admin/add-product/common";

export const CommonFabrics = () => {
  return (
    <Collapsible className="border-b pb-3">
      <OptionsWrapper title="Seleção rápida">
        <CollapsibleTrigger asChild>
          <div className="w-full flex items-center justify-between">
            <p className="w-full small-text tracking-wide uppercase text-muted-foreground">
              Tecidos comuns
            </p>
            <Button data-round size={"icon-sm"} variant={"transparent"}>
              <Icon Svg={ChevronDown} strokeWidth="thin" size="xl" />
            </Button>
          </div>
        </CollapsibleTrigger>
      </OptionsWrapper>
      <CollapsibleContent className="mt-3 mb-2">
        <ButtonsWrapper>
          {Object.keys(commonFabrics).map((key) => (
            <Button
              variant={"transparent"}
              data-option={key}
              key={key}
              size={"sm"}
            >
              {key}
            </Button>
          ))}
        </ButtonsWrapper>
      </CollapsibleContent>
    </Collapsible>
  );
};
