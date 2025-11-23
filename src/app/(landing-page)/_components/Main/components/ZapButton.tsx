"use client";
import React, { useState } from "react";
import Image from "next/image";

const css = {
  button: `h-13 w-full max-w-86 gap-2.5 px-6 rounded-2xl bg-white/8 border-[2px] border-white/64 
  cursor-pointer hover:bg-white/90 hover:text-[#A21E92] font-semibold transition-all duration-200 
  text-white  font-medium leading-5 text-[1.028571em] relative
  `,
};

function handleOpenChat() {
  const phoneNumber = "5534984125832"; // coloque seu número aqui
  const message = "Olá! Gostaria de mais informações."; // mensagem opcional
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank"); // abre em nova aba
}

const ZapButton = ({ hideInMobile = false }: { hideInMobile?: boolean }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <button
      onClick={handleOpenChat}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={`${css.button} ${
        hideInMobile ? "hidden sm:centralize" : "centralize sm:hidden"
      }`}
    >
      <Image
        src={
          !hover ? "/icons/white-whatsapp.png" : "/icons/purple-whatsapp.png"
        }
        alt="Logo do Whatsapp"
        width={22}
        height={22}
      />
      Fale Conosco
    </button>
  );
};

export default ZapButton;
