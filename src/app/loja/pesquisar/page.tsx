import React from "react";
import ButtonChat from "@ui/ButtonChat";
import Header from "./_components/Header";
import SearchButton from "./_components/SearchButton";
import Suggestions from "./_components/Suggestions";
import UserGenders from "./_components/UserGenders";

const Pesquisar = (): React.ReactElement => {
  return (
    <div className="min-h-[100vh] bg-white px-3">
      <div>
        <Header />
        <SearchButton />
      </div>
      <UserGenders />
      <Suggestions />
      <ButtonChat />
    </div>
  );
};

export default Pesquisar;
