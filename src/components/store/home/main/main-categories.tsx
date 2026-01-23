'use client';
import { InputWrapper, SectionHeader } from '@/components/store/home/ui/index';
import { UserContext } from '@/contexts/index';
import { HomeContext } from '@/contexts/homeContext';
import { MainCategory } from '@/types/types';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { MainCatsInput } from './main-categories/_inputs/main-cats-input';

const css = {
  container: `
    size-auto max-w-[648px] sm:px-6 m-auto flex j-start flex-wrap gap-4 lg:flex-nowrap lg:h-[360px] lg:max-w-none
    xl:h-[390px] relative
  `,
  sectiooInEditMode: 'pb-0 mb-0 m-auto max-w-210',
  wrapperEditMode: 'p-6 pt-3 bg-white br-md mb-10 shadow-lg',
  wrapperImg: `
    w-[calc(50%-6px)] h-[66vw] max-w-[320px] max-h-[420px] bg-gray-100 flex items-end relative overflow-hidden
    br-lg lg:h-full
  `,
  img: 'absolute inset-0 w-full h-full object-cover object-top scale-106 sepia-30',
  nameWrapper: `w-full flex-center relative bg-linear-to-t from-primary-950/80 to-transparent 
    [text-shadow:_0_0_8px_rgb(0,_4px,_8px,_0.8)]`,
  name: 'w-full py-6 px-8 text-primary-50 sm:text-center leading-none',
};

export const MainCategories = () => {
  const [sectionEditMode, setSectionEditMode] = useState<boolean>(false);
  const { mainCategories } = useContext(HomeContext);
  const { selectedGender, childCatSelected } = useContext(UserContext);

  const categories = childCatSelected
    ? []
    : selectedGender === 'masculino'
      ? mainCategories.masculino
      : selectedGender === 'feminino'
        ? mainCategories.feminino
        : [];

  if (categories && categories.length > 0) {
    return (
      <div>
        <div className={`${sectionEditMode && css.sectiooInEditMode}`}>
          <SectionHeader
            title="Categorias de Destaque"
            subtitle="Os mais procurados"
            sectionEditMode={sectionEditMode}
            setSectionEditMode={setSectionEditMode}
          />
          {!sectionEditMode ? (
            <div className={`${css.container}`}>
              {categories.map((item: MainCategory) => (
                <div key={item.urlImg} className={`${css.wrapperImg}`}>
                  <Image src={item.urlImg} alt={item.alt} className={`${css.img}`} fill={true} />
                  <div className={`${css.nameWrapper}`}>
                    <h4 className={`${css.name}`}>{item.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`${css.wrapperEditMode}`}>
              <InputWrapper
                title="Defina as principais categorias de cada gênero"
                setState={setSectionEditMode}>
                <MainCatsInput />
              </InputWrapper>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
