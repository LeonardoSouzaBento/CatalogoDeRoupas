import React, { useContext } from "react";
import {
  UserGenderList,
  SpecialSelections,
  MainCategories,
  FindUsSection,
} from "./components";
import WrapperSection from "./components/WrapperSection";
import AboutSection from "./components/AboutSection/AboutSection";
import { HomeDataContext } from "@/contexts";

const Main = (): React.ReactElement => {
  const { selectedGender } = useContext(HomeDataContext);

  return (
    <main>
      <WrapperSection
        child={<UserGenderList />}
        sectionStyles="bg-white"
        wrapperStyles="!pt-[24px] pb-6 sm:pb-6"
      />
      <WrapperSection
        child={<SpecialSelections />}
        sectionStyles="!px-0"
        wrapperStyles="!pb-0"
      />
       <WrapperSection
        child={<SpecialSelections />}
        sectionStyles="!px-0 bg-[linear-gradient(90deg,#F9FAFB,#fff)] shadow-special-selections"
        wrapperStyles="!pb-0"
      />
      {selectedGender !== "infantil" && (
        <WrapperSection
          child={<MainCategories />}
          sectionStyles="bg-white"
        />
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
