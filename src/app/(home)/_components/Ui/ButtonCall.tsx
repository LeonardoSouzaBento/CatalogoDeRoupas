"use client";
import React from "react";
import { useRouter } from "next/navigation";

const css = {
  wrapperButtonCall: "size-auto flex",
  buttonCall:
    "h-13 w-full max-w-86 flex items-center justify-center px-6 rounded-xl bg-yellow-400 text-stone-800 font-h font-semibold leading-5 cursor-pointer hover:bg-yellow-500 transition-color duration-300 text-[1.180em] sm:text-[1.195em] md:text-[1.202em] lg:text-[1.216em] xl:text-[1.230em] 2xl:text-[1.244em]",
};

const ButtonCall = ({
  text = "two",
  specifStyles,
  hideInMobile = false,
}: {
  text?: string;
  specifStyles?: string;
  hideInMobile?: boolean | null;
}): React.ReactElement => {
  const router = useRouter();

  function handleNavigate() {
    if (text === "one") {
      router.push("/loja/");
    }
  }

  return (
    <div
      className={`${css.wrapperButtonCall} ${specifStyles} ${
        hideInMobile ? "hidden md:!flex" : "flex md:!hidden"
      }`}
    >
      <button className={`${css.buttonCall}`} onClick={handleNavigate}>
        {text === "one" ? "Ver Um Catálogo Completo" : "Criar Meu Catálogo"}
      </button>
    </div>
  );
};

export default ButtonCall;
