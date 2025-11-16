"use client"
import React from "react";
import Image from "next/image";

const css = {
  button: `h-13 w-full max-w-86 gap-3 px-6 rounded-2xl bg-white/8 border-[2px] border-white/64 
  cursor-pointer hover:bg-white/93 hover:text-[#A21E92] hover:font-semibold transition-all duration-200 
  text-white  font-medium leading-5 text-[1.050em] sm:text-[1.065em] md:text-[1.072em] lg:text-[1.086em] xl:text-[1.100em] 2xl:text-[1.114em] relative
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
  return (
    <button
      onClick={handleOpenChat}
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
