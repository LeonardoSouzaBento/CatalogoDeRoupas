'use client';
import { InputWrapper, SectionHeader } from '@/components/store/home/ui/index';
import { UserContext } from '@/contexts/index';
import { HomeContext } from '@/contexts/homeContext_';
import { MainCategory } from '@/types/types';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { MainCatsInput } from './main-categories/_inputs/main-cats-input';

const css = {
  container: `
    relative mx-auto pb-2 grid grid-cols-2 md-sm:grid-cols-2 gap-4 
    next-md:max-w-none next-md:flex next-md:flex-nowrap next-md:overflow-x-scroll
    next-md:justify-center
  `,
  editMode: 'pb-0 mb-0 m-auto max-w-210',
  wrapperEditMode: 'p-6 pt-3 bg-light-bg rounded-md mb-10 shadow-lg',
  imageWrapper: `
    h-[66dvw] max-h-108 flex items-end relative overflow-hidden bg-theme-100 rounded-lg 
    next-md:w-74 next-md:min-w-74
  `,
  image: 'absolute inset-0 w-full h-full object-cover object-top scale-106 sepia-30',
  nameWrapper: `w-full flex-center relative bg-linear-to-t from-primary-950/80 to-transparent 
    [text-shadow:_0_0_8px_rgb(0,_4px,_8px,_0.8)]`,
  name: 'w-full py-6 px-8 text-primary-50 sm:text-center leading-none',
};

export const MainCategories = ({ resizeCount }: { resizeCount: number }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
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
        <div className={`${editMode && css.editMode}`}>
          <SectionHeader
            title="Categorias de Destaque"
            subtitle="Os mais procurados"
            editMode={editMode}
            setEditMode={setEditMode}
          />
          {!editMode ? (
            <div className={`${css.container}`}>
              {categories.map((item: MainCategory) => (
                <div key={item.urlImg} className={`${css.imageWrapper}`}>
                  <Image src={item.urlImg} alt={item.alt} className={`${css.image}`} fill />
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
                setState={setEditMode}>
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
