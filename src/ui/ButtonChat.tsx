"use client";
import { iconMdStyles } from "@/data/styles";
import { MessageSquare } from "lucide-react";
import React from "react";

const ButtonChat = () => {
  const css = {
    wrapper: `h-11 w-11 bg-white centralize br-50 fixed bottom-4 right-4 
    [box-shadow:0_0_15px_#0000003d,0_4_8px_#0000003d] hover:scale-110 fast-trans`,
  };

  function handleOpenChat() {
    const phoneNumber = "5534984125832"; // coloque seu número aqui
    const message = "Olá! Gostaria de mais informações."; // mensagem opcional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // abre em nova aba
  }

  return (
    <div className={`${css.wrapper}`} onClick={handleOpenChat}>
      <MessageSquare {...iconMdStyles} />
    </div>
  );
};

export default ButtonChat;
