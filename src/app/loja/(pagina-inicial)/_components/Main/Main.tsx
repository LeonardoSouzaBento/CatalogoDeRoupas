"use client";
import { HomeContext, UserContext } from "@/contexts";
import React, { useContext, useEffect } from "react";
import {
  AboutSection,
  FindUsSection,
  MainCategories,
  UserGenderList,
} from "./components";
import {
  EverydayClothes,
  GymClothes,
  SpecialClothes,
} from "./components/ClothesSection/sections";
import WrapperSection from "./components/WrapperSection";

const clothesSectionStyles =
  "!px-0 bg-gradient-to-r from-gray-50 to-white shadow-special-selections";

const Main = (): React.ReactElement => {
  const { hasMainCategories, setHasMainCategories, hasGymClothes } = useContext(HomeContext);
  const { childCatSelected } = useContext(UserContext);

  useEffect(() => {
    if (childCatSelected) {
      setHasMainCategories(false);
    } else{
      setHasMainCategories(true);
    }
  }, [childCatSelected, setHasMainCategories]);

  return (
    <main>
      <WrapperSection
        child={<UserGenderList />}
        sectionStyles="bg-gray-50 bg-gradient-to-b from-[#F9FAFB] to-white shadow-none!"
        wrapperStyles="pt-6 pb-9 sm:pb-6"
      />
      <WrapperSection
        child={<SpecialClothes />}
        sectionStyles={clothesSectionStyles}
        wrapperStyles="!pb-0"
      />
      <WrapperSection
        child={<EverydayClothes />}
        sectionStyles={clothesSectionStyles}
        wrapperStyles="!pb-0"
      />
      {hasGymClothes && (
        <WrapperSection
          child={<GymClothes />}
          sectionStyles={clothesSectionStyles}
          wrapperStyles="!pb-0"
        />
      )}
      {hasMainCategories && (
        <WrapperSection child={<MainCategories />} sectionStyles="bg-white" />
      )}
      <WrapperSection child={<FindUsSection />} />
      <WrapperSection
        child={<AboutSection />}
        sectionStyles="bg-white pt-3 pb-3"
        wrapperStyles="max-w-210! h-auto box-border bg-white shadow-soft p-6! br-lg "
      />
    </main>
  );
};

export default Main;
