import React from "react";
import {
  UserCategoryList,
  SpecialSelections,
  MainCategories,
  FindUsSection,
} from "./Components";
import "./main.css"

const Main = (): React.ReactElement => {
  return (
    <main className="w-[calc(100%-24px)] max-w-[1180px] m-auto">
      <UserCategoryList />
      <SpecialSelections />
      <MainCategories />
      <FindUsSection />
    </main>
  );
};

export default Main;
