"use client";
import { BooleanSetter } from "@/types/types";
import { Heart, Menu, Search, User } from "lucide-react";
import React from "react";
import type { ButtonType } from "./components/Button";
import Button from "./components/Button";

const buttons: ButtonType[] = [
  { icon: User, name: "Minha Conta", link: "/loja/minha-conta" },
  { icon: Menu, name: "Mais Opções" },
  { icon: Search, isSearchButton: true, link: "/loja/pesquisar" },
  { icon: Heart, name: "Favoritos", link: "/loja/favoritos" },
];

const css = {
  mainWrapper:
    "w-full h-auto sticky top-0 left-0 z-2 bg-white/36 backdrop-blur-xs shadow-soft-soft bs-b border-[#ffffff22]",
  wrapper:
    "w-[calc(100%-32px)] max-w-[1180px] m-auto flex justify-between items-center flex-wrap gap-4 sm:flex-nowrap md:justify-center lg:gap-8",
  nav: "h-18 w-full flex justify-between items-center sm:justify-center gap-3 sm:gap-4 md:gap-5 flex-auto",
};

const TopNavigationBar = ({
  setSeeOptionsSection,
}: {
  setSeeOptionsSection: BooleanSetter;
}): React.ReactElement => {
  return (
    <>
      <div className={css.mainWrapper}>
        <div className={`${css.wrapper}`}>
          <nav className={`${css.nav}`}>
            {buttons.map((button, index) => (
              <Button
                key={index}
                icon={button.icon}
                isSearchButton={button.isSearchButton}
                name={button.name}
                link={button.link}
                setSeeOptionsSection={setSeeOptionsSection}
              />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNavigationBar;
