import React from "react";

const css = {
  wrapperButtonCall: "size-auto flex",
  buttonCall:
    "h-13 flex items-center justify-center px-6 rounded-[26px] bg-yellow-500 shadow-xl text-violet-900 font-h font-semibold leading-5 text-[1.18em] xl:text-[1.33em] cursor-pointer hover:bg-amber-500 transition-color duration-300",
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
  return (
    <div
      className={`${css.wrapperButtonCall} ${specifStyles} ${
        hideInMobile ? "hidden md:!flex" : "flex md:!hidden"
      }`}
    >
      <button className={`${css.buttonCall}`}>
        {text === "one" ? "Ver Um Catálogo Completo" : "Criar Meu Catálogo"}
      </button>
    </div>
  );
};

export default ButtonCall;
