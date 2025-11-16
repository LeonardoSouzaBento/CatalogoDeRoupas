import React from "react";
import ButtonChat from "@ui/ButtonChat";
import TitlePage from "@ui/TitlePage";
import { HeaderCard } from "../_ui";
import NoClothesAlert from "./_components/NoClothesAlert";

const css = {
  mainWrapper: "px-3 pb-5",
  wrapper: `bg-white br-lg p-5`,
};

const Favoritos = (): React.ReactElement => {
  return (
    <>
      <TitlePage title="Meus Favoritos" />
      <div className={`${css.mainWrapper}`}>
        <div className={`${css.wrapper} shadow-soft`}>
          <HeaderCard
            title="Produtos curtidos"
            icon="bookmark_heart"
          />

          <NoClothesAlert />
        </div>
        <ButtonChat />
      </div>
    </>
  );
};

export default Favoritos;
