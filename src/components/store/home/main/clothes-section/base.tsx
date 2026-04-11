import { SectionHeader } from "@/components/store/home/ui/index";
import { ScrollArea, ScrollBar, ScrollContainer } from "@/components/ui";
import { useUserContext } from "@/contexts/index";
import { useLocalEditMode } from "@/hooks";
import type { HomeClothing, StateSetter } from "@/types/types";
import { useEffect } from "react";
import { HomeProduct } from "./home-product";

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
}

const Base = ({
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
}: ClothesSectionProps) => {
  const { selectedGender, childCatSelected } = useUserContext();
  const [editMode, setEditMode] = useLocalEditMode();
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

  if (displayedItems.length > 0) {
    return (
      <>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          section="clothes"
          editMode={editMode}
          setEditMode={setEditMode}
        />
        <ScrollContainer
          ScrollBar={
            <ScrollBar className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10" />
          }
        >
          <ScrollArea
            className="flex gap-[clamp(12px,calc(8.394366px+1.126761vw),24px)] 
              pt-3 pb-6 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 box-border"
          >
            {displayedItems.map((item, index) => (
              <HomeProduct
                editMode={editMode}
                item={item}
                key={`${index} ${item.id}`}
              />
            ))}
          </ScrollArea>
        </ScrollContainer>
      </>
    );
  } else {
    return null;
  }
};

export default Base;
