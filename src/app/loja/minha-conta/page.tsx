// import { useState } from "react";
import MeasuresCard from "@/components/shop/MyAccount/MeasuresCard";
import UserCard from "@/components/shop/MyAccount/UserCard";
import HeaderCard from "@/components/shop/MyAccount/HeaderCard";
import { Ruler, BookHeart} from "lucide-react";
import React from "react";

const css = { mainWrapper: ``, wrapper: "", p: ``, button: `` };

const MinhaConta = (): React.ReactElement => {
  return (
    <div className={`${css.mainWrapper}`}>
      <UserCard />

      <div className={`${css.wrapper}`}>
        <HeaderCard title="Meus Favoritos" child={<BookHeart />} />
        <MeasuresCard />
      </div>

      <div className={`${css.wrapper}`}>
        <HeaderCard title="Minhas Medidas" child={<Ruler />} />
        <MeasuresCard />
      </div>
    </div>
  );
};

export default MinhaConta;
