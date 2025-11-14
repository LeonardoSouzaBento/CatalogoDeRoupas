"use client";
import { HeaderCard } from "@/app/loja/_ui";
import { UserContext } from "@/contexts";
import { Genders } from "@/types/types";
import React, { useContext } from "react";

const css = {
  wrapper: `flex flex-wrap gap-4`,
  button: `w-full min-[500px]:w-[calc(50%-6px)] max-w-52 light-button br-50 j-center font-normal
  hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600`,
  selected: `ring-style`,
  icon: `material-symbols-outlined line-span font-[450]! text-[1.245em]!`,
};

const buttons: { label: string; value: Genders; icon?: string }[] = [
  { label: "Masculino", value: "masculino", icon: "male" },
  { label: "Feminino", value: "feminino", icon: "female" },
];

const GenderButtons = () => {
  const { selectedGender, setSelectedGender } = useContext(UserContext);

  return (
    <div className="max-w-3xl lg:max-w-4xl m-auto basic-card-style">
      <HeaderCard
        title="Gênero"
        icon="wc"
        spanStyles="text-[1.21em]! mb-px font-light!"
      />
      <div className={css.wrapper}>
        {buttons.map(({ label, value, icon }) => (
          <button
            key={value}
            className={`${css.button} ${
              selectedGender === value ? css.selected : ""
            }`}
            onClick={() => setSelectedGender(value)}
          >
            {label}
            <span
              className={`${css.icon}`}
            >
              {icon}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenderButtons;
