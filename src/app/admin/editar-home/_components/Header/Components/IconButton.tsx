import React from "react";
import type { LucideIcon } from "lucide-react";
import { gray800 } from "@src/data/styles";

export interface IconButtonType {
  icon: LucideIcon;
  isSearchButton?: boolean;
  name?: string;
}

const IconButton = ({
  icon: Icon,
  isSearchButton,
  name,
}: IconButtonType): React.ReactElement => {
  const css = {
    button:
      "h-10 centralize gap-2 sm:px-4 sm:pl-[14px]  hover:bg-white/75 hover:shadow-md/8 trans rounded-sm",
    wrapperIcon: "h-10 w-10 centralize bg-white/10 sm:bg-transparent",
    p: "hidden sm:inline pr-2 font-h font-medium text-left text-neutral-800 text-[0.890em] sm:text-[0.905em] md:text-[0.912em] lg:text-[0.926em] xl:text-[0.940em] 2xl:text-[0.954em] leading-none",
    buttonSearch:
      "h-10 w-34 sm:min-w-36 max-w-60 px-4 flex flex-auto justify-between items-center hover:bg-white/75 hover:shadow-md/14 trans lg:order-2 shadow-md/8 font-medium text-[1.125em] sm:text-[1.132em] md:text-[1.136em] lg:text-[1.143em] xl:text-[1.150em] 2xl:text-[1.157em] text-neutral-800 bg-white/10 border-b border-white/15",
    wrapperIconSearch: "button-square",
    icon: { strokeWidth: 2.2, size: 24, color: gray800 },
  };

  return isSearchButton ? (
    <button className={`${css.buttonSearch}`}>
      Buscar
      <div className={css.wrapperIconSearch}>
        <Icon {...css.icon} />
      </div>
    </button>
  ) : (
    <button className={css.button}>
      <div className={css.wrapperIcon}>
        <Icon {...css.icon} />
      </div>
      <p className={css.p}>{name}</p>
    </button>
  );
};

export default IconButton;
