import React from "react";
import Image from "next/image";

const css = {
  button: `h-13 w-full max-w-86 gap-3 px-6 rounded-2xl bg-white/8 border-[2px] border-white/64 
  cursor-pointer hover:bg-white/93 hover:text-[#A21E92] hover:font-semibold transition-color duration-200 
  text-white font-p font-medium leading-5 text-[1.180em] sm:text-[1.195em] md:text-[1.202em] lg:text-[1.216em] xl:text-[1.230em] 2xl:text-[1.244em] relative
  `,
};

const ZapButton = ({ hideInMobile = false }: { hideInMobile?: boolean }) => {
  return (
    <button
      className={`${css.button} ${
        hideInMobile ? "hidden sm:centralize" : "centralize sm:hidden"
      }`}
    >
      <Image
        src="/home/whatsapp.png"
        alt="Logo do Whatsapp"
        width={22.5}
        height={22.5}
      />
      Fale Conosco
    </button>
  );
};

export default ZapButton;
