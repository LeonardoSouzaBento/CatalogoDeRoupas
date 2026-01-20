"use client";
import React, { useState, useContext } from "react";
import { mostSearched } from "@/data/UserData";
import { UserContext } from "@/contexts";

const css = {
  wrapperSuggestions: `h-max grid grid-cols-2 grid-rows-4 sm:grid-cols-3 sm:grid-rows-3 gap-3`,
};

const Suggestions = () => {
  const { selectedGender } = useContext(UserContext);
  const suggestions =
    selectedGender === "masculino"
      ? mostSearched.masculino
      : mostSearched.feminino;

  return (
    <div className="h-max px-2 py-5 border-t  br-0">
      <p className="mb-5 ">Buscas Frequentes:</p>
      <div className={`${css.wrapperSuggestions}`}>
        {suggestions.map((item: string) => (
          <Button key={item} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;

const Button = ({ item }: { item: string }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const css = {
    wrapperItem: "min-h-10 flex-center px-[18px] br-md bg-gray-100 hover:bg-gray-200 trans",
    selected: "",
  };

  return (
    <div
      className={`${css.wrapperItem} ${selected && css.selected}`}
      onClick={() => {
        setSelected(true);
      }}
    >
      <p className="leading-5 text-left w-full">{item}</p>
    </div>
  );
};
