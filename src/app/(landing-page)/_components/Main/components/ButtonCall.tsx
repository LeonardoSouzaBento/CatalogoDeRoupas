"use client";
import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const css = {
  wrapperButtonCall: "size-auto flex",
  buttonCall:
    `h-13 w-full max-w-86 flex items-center justify-center gap-3 px-6 text-center rounded-2xl bg-yellow-400 text-stone-800  font-semibold leading-5 cursor-pointer hover:bg-yellow-500 hover:scale-104 transition-color duration-300 
    text-[1.050em] sm:text-[1.065em] md:text-[1.072em] lg:text-[1.086em] xl:text-[1.100em] 2xl:text-[1.114em]`,
};

const iconStyles = { size: 20, strokeWidth: 2.3, color: "#802954" };

const ButtonCall = ({
  text = "two",
  specifStyles,
  hideInMobile = false,
}: {
  text?: string;
  specifStyles?: string;
  hideInMobile?: boolean | null;
}): React.ReactElement => {
  return (
    <div
      className={`${css.wrapperButtonCall} ${specifStyles} ${
        hideInMobile ? "hidden md:!flex" : "flex md:!hidden"
      }`}
    >
      <Link
        className={`${css.buttonCall} ${text === "one" && "max-[374px]:gap-0"}`}
        href={text === "one" ? "/loja" : "/loja"}
      >
        {text === "one" && <ShoppingBag {...iconStyles} />}
        {text === "one" ? "Ver Um Catálogo Completo" : "Criar Meu Catálogo"}
      </Link>
    </div>
  );
};

export default ButtonCall;
