import React from "react";
import {
  UserGenderList,
  SpecialSelections,
  MainCategories,
  FindUsSection,
} from "./components";

const Main = (): React.ReactElement => {
  return (
    <main className="w-[calc(100%-24px)] max-w-[1180px] m-auto">
      <UserGenderList />
      <SpecialSelections />
      <MainCategories />
      <FindUsSection />
    </main>
  );
};

export default Main;
