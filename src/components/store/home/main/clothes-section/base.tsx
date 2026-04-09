import { SectionHeader } from "@/components/store/home/ui/index";
import { ScrollBar } from "@/components/ui/scroll-bar";
import { useUserContext } from "@/contexts/index";
import { useLocalEditMode, useMatchMedia, useMouseScrollX } from "@/hooks";
import type { HomeClothing, StateSetter } from "@/types/types";
import { useEffect, useRef } from "react";
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
  const parentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeCount = useMatchMedia();
  const { thumbWidth } = useMouseScrollX({
    parentRef,
    containerRef,
    resizeCount,
  });

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
        <div className={`crop relative`} ref={parentRef}>
          <div
            className="flex gap-[clamp(12px,calc(8.394366px+1.126761vw),24px)] 
              pt-3 pb-6 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 box-border 
              overflow-x-scroll relative scrollbar-hidden"
            ref={containerRef}
          >
            {displayedItems.map((item, index) => (
              <HomeProduct
                editMode={editMode}
                item={item}
                key={`${index} ${item.id}`}
              />
            ))}
          </div>

          <ScrollBar
            containerRef={containerRef}
            thumbWidth={thumbWidth}
            className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10"
            // thumbProps={{
            //   className: "bg-primary-50",
            // }}
          />
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Base;
