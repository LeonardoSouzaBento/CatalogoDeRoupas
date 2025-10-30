"use client";
import React from "react";
import { iconMdStyles } from "@/app/lucideIconStyles";
import { X } from "lucide-react";
import Link from "next/link";

const css = {
  wrapper: `h-10 p-5 box-content flex items-center j-between br-0`,
  pLogo:
    "leading-none font-logo text-stone-800 text-[1.780em] sm:text-[1.830em] md:text-[1.854em] lg:text-[1.902em] xl:text-[1.950em] 2xl:text-[1.998em]",
  button: "h-10 w-10 centralize br-md bg-gray-50 hover:bg-gray-100",
};

const Header = () => {
  return (
    <div className={`${css.wrapper}`}>
      <div className="h-13 w-max centralize">
        <p className={`${css.pLogo}`}>Roupas Online</p>
      </div>
      
      <Link className={`${css.button} `} href={"/loja"}>
        <X {...iconMdStyles} />
      </Link>
    </div>
  );
};

export default Header;
