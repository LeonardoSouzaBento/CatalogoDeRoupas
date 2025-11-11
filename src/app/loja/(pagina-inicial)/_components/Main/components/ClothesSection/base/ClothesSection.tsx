import React, { useContext, useEffect } from "react";
import { HomeContext, UserContext } from "@/contexts";
import type { BooleanSetter, HomeClothing, StateSetter } from "@/types/types";
import HomeTitleSubtitle from "@ui/HomeTitleSubtitle";
import MainCardProduct from "./MainCardProduct/MainCardProduct";

const css = {
  wrapper: "crop relative",
  scrollableDiv:
    "flex gap-3 pt-3 px-3 md:px-4 box-border lg:mr-4 pb-9 overflow-x-scroll relative",
};

interface ClothesSectionProps {
  title: string;
  subtitle?: string;
  mensClothing: HomeClothing[];
  womensClothing: HomeClothing[];
  boysClothes?: HomeClothing[];
  girlsClothes?: HomeClothing[];
  setMensClothing: StateSetter<HomeClothing[]>;
  setWomensClothing: StateSetter<HomeClothing[]>;
  setBoysClothes?: StateSetter<HomeClothing[]>;
  setGirlsClothes?: StateSetter<HomeClothing[]>;
  sectionEditMode: boolean;
  setSectionEditMode: BooleanSetter;
}

const ClothesSection = ({
  title,
  subtitle,
  mensClothing,
  womensClothing,
  boysClothes,
  girlsClothes,
  setMensClothing,
  setWomensClothing,
  setBoysClothes,
  setGirlsClothes,
  sectionEditMode,
  setSectionEditMode,
}: ClothesSectionProps) => {
  const { selectedGender, childCatSelected } = useContext(UserContext);
  const { setHasGymClothes } = useContext(HomeContext);
  const isGirlsSection = childCatSelected && selectedGender === "feminino";
  const isBoysSection = childCatSelected && selectedGender === "masculino";
  const isWomanSection = !childCatSelected && selectedGender === "feminino";
  const isManSection = !childCatSelected && selectedGender === "masculino";

  const displayedItems = (() => {
    if (isGirlsSection) return girlsClothes ?? [];
    if (isBoysSection) return boysClothes ?? [];
    if (isWomanSection) return womensClothing ?? [];
    if (isManSection) return mensClothing ?? [];

    return [];
  })();

  useEffect(() => {
    setMensClothing(mensClothing);
    setWomensClothing(womensClothing);
    setBoysClothes?.(boysClothes ?? []);
    setGirlsClothes?.(girlsClothes ?? []);
  }, []);

  useEffect(() => {
    if (!displayedItems.length) {
      setHasGymClothes(false);
    } else {
      setHasGymClothes(true);
    }
  }, [displayedItems]);

  if (displayedItems.length > 0) {
    return (
      <>
        <HomeTitleSubtitle
          title={title}
          subtitle={subtitle}
          section="clothes"
          sectionEditMode={sectionEditMode}
          setSectionEditMode={setSectionEditMode}
        />
        <div className={`${css.wrapper}`}>
          <div className={css.scrollableDiv}>
            {displayedItems.map((item, index) => (
              <MainCardProduct
                sectionEditMode={sectionEditMode}
                item={item}
                key={`${index} ${item.id}`}
              />
            ))}
            <div className={`h-[98%] w-10 br-0 absolute right-0 top-[10px] 
            bg-gradient-to-l from-white to-transparent`} />
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default ClothesSection;
