"use client";
import React, { useContext } from "react";
import { UserContext } from "@/contexts";
import MeasuresCard from "./_components/MeasuresCard/MeasuresCard";
import UserCard from "./_components/UserCard/UserCard";
import TitlePage from "@ui/TitlePage";
import FavoritesCard from "./_components/FavoritesCard";
import CardWrapper from "../_ui/CardWrapper";

const css = {
  mainWrapper: `px-3 m-auto lg:px-6 lg:flex lg:flex-wrap lg:gap-5 lg:max-w-[1208px]`,
  wrapper: `m-auto lg:m-0! lg:w-[calc(50%-12px)] pt-4 p-6 max-w-[592px] 
     sm:max-w-[564px] md:max-w-[640px] lg:max-w-[592px]`,
  p: ``,
  button: ``,
};

const MinhaConta = (): React.ReactElement => {
  const { userData } = useContext(UserContext);

  return (
    <div className="pb-10 lg:pb-0">
      <TitlePage
        title="Minha Conta"
        styles={`ml-px sm:pl-0 max-w-[592px] sm:max-w-[564px] md:max-w-[640px] 
        lg:w-[calc(100%-24px)] lg:max-w-[1162px]`}
      />
      <div className={css.mainWrapper}>
        <CardWrapper styles={`${css.wrapper} p-6!`}>
          <UserCard userData={userData} />
        </CardWrapper>

        <CardWrapper styles={css.wrapper}>
          <FavoritesCard />
        </CardWrapper>

        <CardWrapper styles={`${css.wrapper} mb-0!`}>
          <MeasuresCard userData={userData} />
        </CardWrapper>
      </div>
    </div>
  );
};

export default MinhaConta;
