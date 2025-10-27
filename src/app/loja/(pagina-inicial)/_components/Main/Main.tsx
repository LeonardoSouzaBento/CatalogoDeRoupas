import React from "react";
import {
  UserGenderList,
  SpecialSelections,
  MainCategories,
  FindUsSection,
} from "./components";
import WrapperSection from "./components/WrapperSection";

const Main = (): React.ReactElement => {
  return (
    <main>
      <WrapperSection child={<UserGenderList />} wrapperStyles="!pt-[30px]" />
      <WrapperSection child={<SpecialSelections />} wrapperStyles="!pb-0" />
      <WrapperSection child={<MainCategories />} />
      <WrapperSection child={<FindUsSection />} />
    </main>
  );
};

export default Main;
