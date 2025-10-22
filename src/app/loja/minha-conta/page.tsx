// import { useState } from "react";
import MeasuresCard from "./_components/MeasuresCard/MeasuresCard";
import UserCard from "./_components/UserCard";
import HeaderCard from "./_components//HeaderCard";
import React from "react";
import TitlePage from "@/ui/TitlePage";
import "./page.css";

const css = {
  mainWrapper: `px-3 m-auto lg:px-6 lg:flex lg:flex-wrap lg:gap-6 lg:max-w-[1208px]`,
  wrapper:
    "mb-4 m-auto lg:m-0 lg:w-[calc(50%-12px)] p-5 max-w-[592px] sm:max-w-[564px] md:max-w-[640px] lg:max-w-[592px] br-lg bg-white shadow-lg",
  p: ``,
  button: ``,
};

const MinhaConta = (): React.ReactElement => {
  return (
    <div>
      <TitlePage title="Minha Conta" />
      <div className={`${css.mainWrapper}`}>
        <div className={`${css.wrapper}`}>
          <UserCard />
        </div>
        <div className={`${css.wrapper}`}>
          <HeaderCard title="Meus Favoritos" icon="bookmark_heart" />
        </div>
        <div className={`${css.wrapper}`}>
          <HeaderCard title="Minhas Medidas" icon="square_foot" />
          <MeasuresCard />
        </div>
      </div>
    </div>
  );
};

export default MinhaConta;
