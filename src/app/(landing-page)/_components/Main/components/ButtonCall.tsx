"use client";
import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const css = {
  wrapperButtonCall: "size-auto flex",
  buttonCall: `h-13 w-full max-w-86 flex items-center justify-center gap-3 px-6 text-center 
    rounded-2xl bg-yellow-400 text-stone-800 font-semibold leading-5 
    cursor-pointer hover:bg-yellow-500 hover:scale-104 transition-all duration-200 
    text-[1.086em] shadow-accent`,
};

const iconStyles = { size: 20, strokeWidth: 2.3, color: "#802954" };

const ButtonCall = ({
  text = "one",
  section,
  wrapperStyles,
  buttonStyles,
  hideInMobile = false,
}: {
  text?: string;
  section?: string;
  wrapperStyles?: string;
  buttonStyles?: string;
  hideInMobile?: boolean | null;
}): React.ReactElement => {
  return (
    <div
      className={`${css.wrapperButtonCall} ${wrapperStyles} ${
        hideInMobile ? "hidden md:flex!" : "flex md:hidden!"
      }`}
    >
      <Link
        className={`${css.buttonCall} ${buttonStyles} ${text === "one" && "max-[374px]:gap-0"}`}
        href={text === "one" ? "/loja" : "/loja"}
      >
        {section === "main" && <ShoppingBag {...iconStyles} />}
        {text === "one" ? "Ver Um Catálogo Completo" : "Criar Meu Catálogo"}
      </Link>
    </div>
  );
};

export default ButtonCall;
