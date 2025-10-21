import React from "react";
import Image from "next/image";

const css = {
  wrapperImg: `h-6 w-6 centralize relative`,
  button: `h-13 w-full max-w-86 centralize gap-3 px-6 rounded-xl bg-white/8 border-2 border-white/30 text-white font-h font-medium leading-5 cursor-pointer hover:bg-white/12 transition-color duration-300 text-[1.180em] sm:text-[1.206em] md:text-[1.219em] lg:text-[1.245em] xl:text-[1.270em] 2xl:text-[1.295em]`,
};

const ZapButton = () => {
  return (
    <button className={`${css.button}`}>
      <div className={`${css.wrapperImg}`}>
        <Image
          src="/home/whatsapp.png"
          alt="Logo do Whatsapp"
          fill={true}
        />
      </div>
      Fale Conosco
    </button>
  );
};

export default ZapButton;
