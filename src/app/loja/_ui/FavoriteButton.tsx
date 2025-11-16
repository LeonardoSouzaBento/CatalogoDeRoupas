import React, { useState } from "react";

const css = {
  buttonHeart:
    "h-10 px-0 box-border pt-[1px] absolute bottom-3 right-3 z-1 flex bg-white br-3xl heart-button-shadow hover:scale-104 transition-all duration-200 cursor-pointer",
  wrapperPReturn: "centralize h-full w-33 box-border",
  pReturn: "font-light text-[1.033em] text-gray-950 pb-[1px] ",
  wrapperIcon:
    "h-full min-w-10 w-max centralize gap-3 light-button br-50 fast-trans",
  span: "material-symbols-outlined text-gray-800 font-[400]! pt-[2] text-[1.27em]!",
};

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [fastReturn, setFastReturn] = useState<boolean>(false);

  function handleClickFavorite() {
    setIsFavorite((prev) => !prev);
    setFastReturn(true);
    setTimeout(() => setFastReturn(false), 1800);
  }
  return (
    <button className={`${css.buttonHeart} ${fastReturn && "shadow-md/16"}`}>
      <div className={`${css.wrapperPReturn} ${!fastReturn && "hidden!"}`}>
        <p className={`${css.pReturn}`}>
          {isFavorite ? "Salvo!  " : "Removido!"}
        </p>
      </div>

      <div
        className={`${css.wrapperIcon}`}
        onClick={(e) => {
          e.stopPropagation();
          handleClickFavorite();
        }}
      >
        <span className={`${css.span} ${!isFavorite && "line-span"}`}>
          favorite
        </span>
      </div>
    </button>
  );
};

export default FavoriteButton;
