import React from "react";
import ButtonChat from "@/ui/ButtonChat";
import Header from "./_components/Header";
import SearchButton from "./_components/SearchButton";
import Suggestions from "./_components/Suggestions";
import "../page.css"

const Pesquisar = (): React.ReactElement => {
  return (
    <div className="min-h-[100vh] bg-white px-3">
      <div>
        <Header />
        <SearchButton />
      </div>
      <Suggestions />
      <ButtonChat />
    </div>
  );
};

export default Pesquisar;
