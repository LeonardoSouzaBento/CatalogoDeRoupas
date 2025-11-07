"use client";
import React from "react";
import { iconMdStyles } from "@/app/lucideIconStyles";
import { X } from "lucide-react";
import Link from "next/link";

const css = {
  wrapper: `h-14 px-5 mb-5 box-content flex items-center j-between br-0 
  bg-gradient-to-r from-stone-800 to-stone-700`,
  pLogo: "leading-none font-logo text-white text-stone-800 text-[1.780em]",
  button:
    "h-9 w-9 p-0 centralize br-md bg-stone-600/38 hover:bg-stone-600/76 trans",
};

const Header = ({ seeButtonClose = true }: { seeButtonClose?: boolean }) => {
  return (
    <div className={`${css.wrapper}`}>
      <div className="h-13 w-max centralize">
        <p className={`${css.pLogo}`}>Roupas Online</p>
      </div>

      {seeButtonClose && (
        <Link className={`${css.button} `} href={"/loja"}>
          <X {...iconMdStyles} color="white" />
        </Link>
      )}
    </div>
  );
};

export default Header;
