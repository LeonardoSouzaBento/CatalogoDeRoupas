import { UserContext } from '@/contexts/index';
import type { BooleanSetter, HomeClothing, StateSetter } from '@/types/types';
import { SectionHeader } from '@/components/store/home/ui/index';
import { useContext, useEffect, useRef, useState } from 'react';
import { HomeProduct } from './home-product';
import { useMouseScrollX } from '@/hooks';

const css = {
  wrapper: 'crop relative',
  scrollableDiv: `flex gap-4 pt-3 pb-8 px-4 box-border 
  lg:mr-4 overflow-x-scroll relative scrollbar-hidden`,
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
  sectionEditMode,
  setSectionEditMode,
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
  const [parentWidth, setParentWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  useMouseScrollX(containerRef, scrollWidth, parentWidth);

  function getVariables() {
    if (parentRef.current && containerRef.current) {
      const parentWidth = parentRef.current.offsetWidth;
      const scrollWidth = containerRef.current.scrollWidth;
      setParentWidth(parentWidth);
      setScrollWidth(scrollWidth);
    }
  }

  useEffect(() => {
    getVariables();
  }, []);

  useEffect(() => {
    getVariables();
  }, [resizeCount]);

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
          sectionEditMode={sectionEditMode}
          setSectionEditMode={setSectionEditMode}
        />
        <div className={`${css.wrapper}`} ref={parentRef}>
          <div className={css.scrollableDiv} ref={containerRef}>
            {displayedItems.map((item, index) => (
              <HomeProduct
                sectionEditMode={sectionEditMode}
                item={item}
                key={`${index} ${item.id}`}
              />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Base;
