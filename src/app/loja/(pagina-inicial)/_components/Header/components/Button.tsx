import React from "react";
import type { LucideIcon } from "lucide-react";
import { iconMdStyles } from "@data/styles";
import Link from "next/link";

export interface ButtonType {
  icon: LucideIcon;
  isSearchButton?: boolean;
  name?: string;
  link?: string;
}

const css = {
  button:
    "h-10 centralize gap-[6px] sm:px-4 sm:pl-[14px] hover:bg-white/75 hover:shadow-md/8 trans rounded-sm",
  wrapperIcon: "h-10 w-10 centralize bg-white/20 sm:bg-transparent",
  p: "hidden sm:inline p-button pr-2 text-left text-neutral-800 leading-none",
  buttonSearch:
    "h-10 w-34 sm:min-w-36 max-w-60 px-4 flex flex-auto justify-between items-center hover:bg-white/75 hover:shadow-md/14 trans lg:order-2 shadow-lg/8 text-neutral-800 bg-white/20 p-button",
  wrapperIconSearch: "button-square",
};

const Button = ({
  icon: Icon,
  isSearchButton,
  name,
  link,
}: ButtonType): React.ReactElement => {

  return isSearchButton ? (
    <Link className={`${css.buttonSearch}`} href={link || '/'}>
      Buscar
      <div className={css.wrapperIconSearch}>
        <Icon {...iconMdStyles} />
      </div>
    </Link>
  ) : (
    <>
      {!link ? (
        <button className={css.button}>
          <div className={css.wrapperIcon}>
            <Icon {...iconMdStyles} />
          </div>
          <p className={css.p}>{name}</p>
        </button>
      ) : (
        <Link className={css.button} href={link}>
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
