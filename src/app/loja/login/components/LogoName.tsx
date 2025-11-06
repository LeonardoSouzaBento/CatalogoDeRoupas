"use client";
import React from "react";

const css = {
  wrapperLogo: `size-20 mb-8 box-content flex flex-col justify-center items-center gap-6 
  bg-stone-800 br-50 shadow-soft-hover`,
  pLogo: `h-max text-center text-white font-logo text-[1.32em] leading-0`,
  shopName: `text-center text-[1.36em] font-semibold leading-0 mb-4 capitalize`,
  subtitle: `mb-6 text-gray-500 `,
};

const LogoName = () => {
  return (
    <div className="flex flex-col items-center">
      <div className={`${css.wrapperLogo} bg-gradient-to-br from-stone-800 to-stone-700`}>
        <p className={`${css.pLogo}`}>Roupas</p>
        <p className={`${css.pLogo}`}>Online</p>
      </div>
      <p className={`${css.shopName} tracking-tight`}>
        Nome da sua loja
      </p>
      <p className={`${css.subtitle}`}>Facilite sua compra</p>
    </div>
  );
};

export default LogoName;
