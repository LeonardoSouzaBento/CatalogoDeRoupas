import { SectionHeader } from '@/components/store/home/ui/index';
import { ScrollBar } from '@/components/ui/scroll-bar';
import { UserContext } from '@/contexts/index';
import { useMouseScrollX, useScrollGetVars } from '@/hooks';
import type { BooleanSetter, HomeClothing, StateSetter } from '@/types/types';
import { useContext, useEffect, useRef, useState } from 'react';
import { HomeProduct } from './home-product';

const css = {
  wrapper: 'crop relative',
  scrollableDiv: `flex gap-4 pt-3 pb-8 px-4 box-border overflow-x-scroll relative scrollbar-hidden`,
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
  editMode: boolean;
  setEditMode: BooleanSetter;
  resizeCount: number;
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
  editMode,
  setEditMode,
  resizeCount,
}: ClothesSectionProps) => {
  const { selectedGender, childCatSelected } = useContext(UserContext);
  const isGirlsSection = childCatSelected && selectedGender === 'feminino';
  const isBoysSection = childCatSelected && selectedGender === 'masculino';
  const isWomanSection = !childCatSelected && selectedGender === 'feminino';
  const isManSection = !childCatSelected && selectedGender === 'masculino';
  /* variaveis para rolagem */
  const parentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { parentWidth, scrollWidth, thumbWidth } = useScrollGetVars({
    parentRef,
    containerRef,
    resizeCount,
    calcThumbWidth: true,
  });
  useMouseScrollX(containerRef, scrollWidth, parentWidth);

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
        <div className={`${css.wrapper}`} ref={parentRef}>
          <div className={css.scrollableDiv} ref={containerRef}>
            {displayedItems.map((item, index) => (
              <HomeProduct
                editMode={editMode}
                item={item}
                key={`${index} ${item.id}`}
              />
            ))}
          </div>

          <ScrollBar containerRef={containerRef} thumbWidth={thumbWidth} cssWrapper='pl-4 pb-1.5' />
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Base;
