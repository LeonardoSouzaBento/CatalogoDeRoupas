import React from "react";
import {
  UserGenderList,
  SpecialSelections,
  MainCategories,
  FindUsSection,
} from "./components";

const Main = (): React.ReactElement => {
  return (
    <main>
      <UserGenderList />
      <SpecialSelections />
      <MainCategories />
      <FindUsSection />
    </main>
  );
};

export default Main;
