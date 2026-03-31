import type { BasicClothingInformation, ClothingProperty, StateSetter } from "@/types/types";
import { AddedProperties } from "./added-properties";
import { Properties } from "./properties";

interface Props {
  properties: ClothingProperty[];
  propSelected: string | null;
  setPropSelected: StateSetter<string | null>;
  basicInformation: BasicClothingInformation;
  handleSelectOption: (prop: string, option: string) => void;
  setBasicInformation: StateSetter<BasicClothingInformation>;
}

const BaseGenCore = ({
  properties,
  propSelected,
  setPropSelected,
  basicInformation,
  handleSelectOption,
  setBasicInformation,
}: Props) => {
  return (
    <>
      <Properties
        properties={properties}
        setPropSelected={setPropSelected}
        basicInformation={basicInformation}
        handleSelectOption={handleSelectOption}
      />

      <AddedProperties
        basicInformation={basicInformation}
        setBasicInformation={setBasicInformation}
      />
    </>
  );
};

export { BaseGenCore };
