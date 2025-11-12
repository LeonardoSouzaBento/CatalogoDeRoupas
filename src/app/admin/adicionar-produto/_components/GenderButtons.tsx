"use client";
import { HeaderCard } from "@/app/loja/_ui";
import { UserContext } from "@/contexts";
import React, { useContext } from "react";

const css = {
  wrapper: `flex flex-wrap gap-3`,
  p: ``,
  button: `w-full min-[500px]:w-[calc(50%-6px)] br-50 j-center`,
  selected: `text-blue-700 ring-style`,
};

const GenderButtons = () => {
  const { selectedGender, setSelectedGender } = useContext(UserContext);

  return (
    <div className={`max-w-3xl lg:max-w-4xl m-auto basic-card-style `}>
      <HeaderCard
        title="Gênero"
        icon="wc"
        spanStyles="text-[1.21em]! mb-px"
      />
      <div className={`${css.wrapper}`}>
        <button
          className={`${css.button} ${
            selectedGender === "masculino" && css.selected
          }`}
          onClick={() => {
            setSelectedGender("masculino");
          }}
        >
          Masculino
          <span className="material-symbols-outlined line-span">male</span>
        </button>
        <button
          className={`${css.button} ${
            selectedGender === "feminino" && css.selected
          }`}
          onClick={() => {
            setSelectedGender("feminino");
          }}
        >
          Feminino
          <span className="material-symbols-outlined line-span">female</span>
        </button>
      </div>
    </div>
  );
};

export default GenderButtons;
