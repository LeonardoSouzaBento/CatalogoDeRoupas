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
import { Section } from './ui';

const Main = ({ resizeCount }: { resizeCount: number }) => {
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
      <Section bgLinear={false} defaultShadow={false} className={`bg-light-bg px-0 pt-4 pb-5`}>
        <UserGenderList />
      </Section>

      <Section data-clothes>
        <SpecialSection resizeCount={resizeCount} />
      </Section>

      <Section data-clothes>
        <EverydaySection resizeCount={resizeCount} />
      </Section>

      {hasGymClothes && (
        <Section data-clothes>
          <GymSection resizeCount={resizeCount} />
        </Section>
      )}

      {hasMainCategories && (
        <Section defaultShadow={false} className="shadow-[inset_0_8px_16px_hsla(0,0%,100%,1)]">
          <MainCategories resizeCount={resizeCount} />
        </Section>
      )}

      <Section
        defaultShadow={false}
        className="bg-transparent shadow-[inset_0_6px_12px_hsla(0,0%,0%,0.016)]">
        <FindUsSection />
      </Section>

      <Section
        bgLinear={false}
        defaultShadow={false}
        className={`bg-light-bg [&>div]:max-w-210 [&>div]:h-auto
        [&>div]:p-6 [&>div]:pt-0 [&>div]:rounded-lg [&>div]:mx-auto`}>
        <AboutSection />
      </Section>
    </main>
  );
};

export { Main };
