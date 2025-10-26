"use client";
import React from "react";
import { Pen, ShoppingBag } from "lucide-react";
import Link from "next/link";

const css = {
  wrapperButtonCall: "size-auto flex",
  buttonCall:
    `h-13 w-full max-w-86 flex items-center justify-center gap-3 px-6 text-center rounded-xl bg-yellow-400 text-stone-800 font-p font-semibold leading-5 cursor-pointer hover:bg-yellow-500 transition-color duration-300 
    text-[1.180em] sm:text-[1.195em] md:text-[1.202em] lg:text-[1.216em] xl:text-[1.230em] 2xl:text-[1.244em]`,
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
        {text === "two" && <Pen {...iconStyles} size={19.5} />}
      </Link>
    </div>
  );
};

export default ButtonCall;
