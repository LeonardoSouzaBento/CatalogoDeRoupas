import { UserContext } from '@/contexts';
import type { BooleanSetter, HomeClothing, StateSetter } from '@/types/types';
import {SectionHeader} from '@/components/store/home/ui/index';
import { useContext, useEffect } from 'react';
import { HomeProduct } from './home-product';

const css = {
  wrapper: 'crop relative',
  scrollableDiv: `flex gap-3 pt-3 pb-6 px-3 md:px-4 box-border 
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
}: ClothesSectionProps) => {
  const { selectedGender, childCatSelected } = useContext(UserContext);
  const isGirlsSection = childCatSelected && selectedGender === 'feminino';
  const isBoysSection = childCatSelected && selectedGender === 'masculino';
  const isWomanSection = !childCatSelected && selectedGender === 'feminino';
  const isManSection = !childCatSelected && selectedGender === 'masculino';

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
        <div className={`${css.wrapper}`}>
          <div className={css.scrollableDiv}>
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
