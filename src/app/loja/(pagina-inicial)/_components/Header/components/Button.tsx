import React from "react";
import type { LucideIcon } from "lucide-react";
import { iconMdStyles } from "@/app/lucideIconStyles";
import Link from "next/link";

export interface ButtonType {
  icon: LucideIcon;
  isSearchButton?: boolean;
  name?: string;
  link?: string;
}

const css = {
  button:
    "font-medium h-10 px-0 centralize gap-[6px] sm:px-4 sm:pl-[14px] br-md p-small-button bg-white/20",
  wrapperIcon: "h-10 w-10 centralize bg-white/20 sm:bg-transparent",
  p: "hidden sm:inline p-small-button pr-2 text-left text-neutral-800 leading-none",
  buttonSearch:
    "h-10 w-34 sm:min-w-36 max-w-60 px-4 flex flex-auto justify-between items-center br-lg lg:order-2 shadow-md/4 text-neutral-800 bg-white/20 p-small-button border border-transparent hover:border hover:border-gray-100 hover:scale-102 transition-all! duration-300",
  wrapperIconSearch: "button-square",
};

const hoverStyle = "hover:bg-white/66";

const Button = ({
  icon: Icon,
  isSearchButton,
  name,
  link,
}: ButtonType): React.ReactElement => {
  return isSearchButton ? (
    <Link className={`${css.buttonSearch} ${hoverStyle}`} href={link || "/"}>
      Buscar
      <div className={css.wrapperIconSearch}>
        <Icon {...iconMdStyles} />
      </div>
    </Link>
  ) : (
    <>
      {!link ? (
        <button className={`${css.button} ${hoverStyle}`}>
          <div className={css.wrapperIcon}>
            <Icon {...iconMdStyles} />
          </div>
          <p className={css.p}>{name}</p>
        </button>
      ) : (
        <Link className={`${css.button} ${hoverStyle}`} href={link}>
          <div className={css.wrapperIcon}>
            <Icon {...iconMdStyles} />
          </div>
          <p className={css.p}>{name}</p>
        </Link>
      )}
    </>
  );
};

export default Button;
