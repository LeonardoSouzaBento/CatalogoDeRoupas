import React from "react";
import Image from "next/image";

const css = {
  button: `h-13 w-full max-w-86 gap-3 px-6 rounded-xl bg-white/8 border-2 border-white/64 
  cursor-pointer hover:bg-white/12 transition-color duration-300 
  text-white font-p font-medium leading-5 text-[1.180em] sm:text-[1.195em] md:text-[1.202em] lg:text-[1.216em] xl:text-[1.230em] 2xl:text-[1.244em]
  `,
  wrapperImg: `h-[22px] w-[22px] centralize relative`,
};

const ZapButton = ({ hideInMobile = false }: { hideInMobile?: boolean }) => {
  return (
    <button
      className={`${css.button} ${
        hideInMobile ? "hidden sm:centralize" : "centralize sm:hidden"
      }`}
    >
      <div className={`${css.wrapperImg}`}>
        <Image src="/home/whatsapp.png" alt="Logo do Whatsapp" fill={true} />
      </div>
      Fale Conosco
    </button>
  );
};

export default ZapButton;
