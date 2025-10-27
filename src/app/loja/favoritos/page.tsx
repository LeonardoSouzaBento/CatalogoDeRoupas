import ButtonChat from "@ui/ButtonChat";
import TitlePage from "@ui/TitlePage";
import React from "react";

const css = {
  mainWrapper: "px-3 pb-5",
  wrapperProducts: `bg-white br-lg p-5 flex`,
};

const Favoritos = (): React.ReactElement => {
  return (
    <>
      <TitlePage title="Meus Favoritos" />
      <div className={`${css.mainWrapper}`}>
        <div className={`${css.wrapperProducts}`}></div>
        <ButtonChat />
      </div>
    </>
  );
};

export default Favoritos;
