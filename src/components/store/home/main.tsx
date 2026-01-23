'use client';
import { HomeContext, UserContext } from '@/contexts/index';
import React, { useContext, useEffect } from 'react';
import {
  AboutSection,
  EverydaySection,
  FindUsSection,
  GymSection,
  MainCategories,
  SpecialSection,
  UserGenderList,
} from './main/index';
import { SectionWrapper } from './ui';
import { Separator } from '@/components/ui';

const Main = (): React.ReactElement => {
  const { hasMainCategories, setHasMainCategories, hasGymClothes, setHasGymClothes } =
    useContext(HomeContext);
  const { childCatSelected } = useContext(UserContext);

  /* verificaçã simples por enquanto */
  useEffect(() => {
    if (childCatSelected) {
      setHasGymClothes(false);
      setHasMainCategories(false);
    } else {
      setHasGymClothes(true);
      setHasMainCategories(true);
    }
  }, [childCatSelected, setHasMainCategories]);

  return (
    <main>
      <SectionWrapper
        className={`bg-gray-50 bg-linear-to-b from-[#F9FAFB]
         to-white shadow-none`}>
        <UserGenderList />
      </SectionWrapper>

      <SectionWrapper data-clothes>
        <SpecialSection />
      </SectionWrapper>
      <Separator />
      <SectionWrapper data-clothes>
        <EverydaySection />
      </SectionWrapper>

      {hasGymClothes && (
        <SectionWrapper data-clothes>
          <GymSection />
        </SectionWrapper>
      )}

      {hasMainCategories && (
        <SectionWrapper data-default-shadow="false" className="bg-linear-to-b from-white to-white">
          <MainCategories />
        </SectionWrapper>
      )}

      <SectionWrapper>
        <FindUsSection />
      </SectionWrapper>

      <SectionWrapper
        className={`from-white to-white [&>div]:max-w-210 [&>div]:h-auto
        [&>div]:p-6 [&>div]:pt-0 [&>div]:rounded-lg [&>div]:mx-auto`}>
        <AboutSection />
      </SectionWrapper>
    </main>
  );
};

export { Main };
