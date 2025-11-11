"use client";
import { UserContext } from "@/contexts";
import React, { useContext } from "react";

const css = {
  wrapper: `flex flex-wrap gap-3 mb-5 max-w-192 m-auto`,
  p: ``,
  button: `w-full min-[500px]:w-[calc(50%-6px)] br-50 j-center`,
  selected: `bg-blue-600 text-white`,
};

const GenderButtons = () => {
  const { selectedGender, setSelectedGender } = useContext(UserContext);

  return (
    <div className={`${css.wrapper}`}>
      <button
        className={`${css.button} ${
          selectedGender === "masculino" && css.selected
        }`}
        onClick={() => {
          setSelectedGender("masculino");
        }}
      >
        Peças masculinas
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
        Peças femininas
        <span className="material-symbols-outlined line-span">female</span>
      </button>
    </div>
  );
};

export default GenderButtons;
