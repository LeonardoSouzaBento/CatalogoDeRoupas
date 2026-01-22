'use client';
import { HomeContext, UserContext } from '@/contexts';
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
      <section className="bg-gray-50 bg-linear-to-b from-[#F9FAFB] to-white shadow-none!">
        <div>
          <UserGenderList />
        </div>
      </section>

      <section className="home-store-section">
        <div>
          <SpecialSection />
        </div>
      </section>

      <section className="home-store-section">
        <div>
          <EverydaySection />
        </div>
      </section>

      {hasGymClothes && (
        <section className="home-store-section">
          <div>
            <GymSection />
          </div>
        </section>
      )}

      {hasMainCategories && (
        <section className="home-store-section">
          <div>
            <MainCategories />
          </div>
        </section>
      )}

      <section className="home-store-section">
        <div>
          <FindUsSection />
        </div>
      </section>

      <section
        className={`bg-white pt-3 pb-3 first:max-w-210 first:h-auto first:bg-white
        first:shadow-lg first:p-6 first:br-lg`}>
        <div>
          <AboutSection />
        </div>
      </section>
    </main>
  );
};

export {Main};
