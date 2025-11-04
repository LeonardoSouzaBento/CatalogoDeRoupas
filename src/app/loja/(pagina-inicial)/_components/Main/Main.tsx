"use client";
import { HomeContext } from "@/contexts";
import React, { useContext } from "react";
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
  "!px-0 bg-[linear-gradient(90deg,#F9FAFB,#fff)] shadow-special-selections";

const Main = (): React.ReactElement => {
  const { hasMainCategories, hasClothes } = useContext(HomeContext);

  return (
    <main>
      {/* <AlertFullScrren title="Orientações importantes" text="cuidado com os falss">
        <Info {...iconLgStyles}/>
      </AlertFullScrren> */}
      <WrapperSection
        child={<UserGenderList />}
        sectionStyles="bg-white"
        wrapperStyles="!pt-[24px] pb-6 sm:pb-6"
      />
      <WrapperSection
        child={<SpecialClothes />}
        sectionStyles={`!px-0`}
        wrapperStyles="!pb-0"
      />
      <WrapperSection
        child={<EverydayClothes />}
        sectionStyles={clothesSectionStyles}
        wrapperStyles="!pb-0"
      />
      {hasClothes && (
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
