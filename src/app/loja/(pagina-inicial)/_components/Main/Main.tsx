import React from "react";
import {
  UserGenderList,
  SpecialSelections,
  MainCategories,
  FindUsSection,
} from "./components";
import WrapperSection from "./components/WrapperSection";
import AboutSection from "./components/AboutSection/AboutSection";

const Main = (): React.ReactElement => {

  return (
    <main>
      <WrapperSection child={<UserGenderList />} sectionStyles="bg-white" wrapperStyles="!pt-[30px]" />
      <WrapperSection child={<SpecialSelections />} wrapperStyles="!pb-0" />
      <WrapperSection child={<MainCategories />} sectionStyles="bg-white pb-[6]"/>
      <WrapperSection child={<FindUsSection />}/>
      <WrapperSection child={<AboutSection />} sectionStyles="bg-white" />
    </main>
  );
};

export default Main;
