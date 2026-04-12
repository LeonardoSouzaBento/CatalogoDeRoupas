import {
  Button,
  ButtonsWrapper,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Icon,
  Separator,
} from "@/components/ui";
import type { StateSetter } from "@/types";
import { ChevronDown, Plus } from "lucide-react";
import { OptionsWrapper } from "../../common";
import {
  AddMaterial,
  MaterialQuantities,
  MaterialsList,
  SearchMaterial,
} from "./materials/index";

interface MaterialsProps {
  selectedMaterial: string | null;
  setSelectedMaterial: StateSetter<string | null>;
  filteredMaterials: string[];
  searchValue: string;
  setSearchValue: StateSetter<string>;
  setFilteredMaterials: StateSetter<string[]>;
  setSearchButtonClicked: StateSetter<number>;
  seeNewMaterialInput: boolean;
  setSeeNewMaterialInput: StateSetter<boolean>;
  divRef: React.RefObject<HTMLDivElement | null>;
}

export const Materials = ({
  selectedMaterial,
  setSelectedMaterial,
  filteredMaterials,
  searchValue,
  setSearchValue,
  setFilteredMaterials,
  setSearchButtonClicked,
  seeNewMaterialInput,
  setSeeNewMaterialInput,
  divRef,
}: MaterialsProps) => {
  return (
    <div className="space-y-4">
      <Collapsible>
        <OptionsWrapper title="Seleção manual">
          <CollapsibleTrigger asChild>
            <div className="flex items-center justify-between">
              <p className="small-text text-muted-foreground tracking-wide uppercase">
                Material
              </p>
              <Button data-round size={"icon-sm"} variant={"transparent"}>
                <Icon Svg={ChevronDown} strokeWidth="thin" size="xl" />
              </Button>
            </div>
          </CollapsibleTrigger>
        </OptionsWrapper>
        <CollapsibleContent className="border-b">
          <ButtonsWrapper
            className={`grid grid-cols-1 bp-576:grid-cols-2 pb-4`}
          >
            <SearchMaterial
              data-round
              size={"sm"}
              setSearchButtonClicked={setSearchButtonClicked}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setFilteredMaterials={setFilteredMaterials}
            />
            {seeNewMaterialInput ? (
              <AddMaterial
                setShow={setSeeNewMaterialInput}
                selectedMaterial={selectedMaterial}
                setSelectedMaterial={setSelectedMaterial}
              />
            ) : (
              <Button
                data-round
                size={"sm"}
                className="max-w-max pl-[0.78em]"
                onClick={() => {
                  setSelectedMaterial("");
                  setSeeNewMaterialInput(true);
                }}
              >
                <Icon Svg={Plus} size="lg" strokeWidth="light" />
                Outro material
              </Button>
            )}
          </ButtonsWrapper>
          <MaterialsList
            ref={divRef}
            selectedMaterial={selectedMaterial}
            setSelectedMaterial={setSelectedMaterial}
            filteredMaterials={filteredMaterials}
            searchValue={searchValue}
          />
        </CollapsibleContent>
      </Collapsible>
      <Collapsible>
        <CollapsibleTrigger asChild>
          <div className="flex items-center justify-between">
            <p className="small-text text-muted-foreground tracking-wide uppercase">
              Quantidades
            </p>
            <Button data-round size={"icon-sm"} variant={"transparent"}>
              <Icon Svg={ChevronDown} strokeWidth="thin" size="xl" />
            </Button>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <MaterialQuantities></MaterialQuantities>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
