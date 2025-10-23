import { iconLgStyles } from "@/data/styles";
import { X } from "lucide-react";
import React from "react";

const css = {
  wrapper: `h-max px-2 py-4 flex items-center j-between`,
  pLogo:
    "leading-none font-logo text-stone-800 text-[1.780em] sm:text-[1.830em] md:text-[1.854em] lg:text-[1.902em] xl:text-[1.950em] 2xl:text-[1.998em]",
  button: "h-10 w-10 centralize br-sm bg-white hover:bg-gray-100",
};

const Header = () => {
  return (
    <div className={`${css.wrapper}`}>
      <div className="h-13 w-max centralize">
        <p className={`${css.pLogo}`}>Roupas Online</p>
      </div>
      <button className={`${css.button} `}>
        <X {...iconLgStyles} />
      </button>
    </div>
  );
};

export default Header;
