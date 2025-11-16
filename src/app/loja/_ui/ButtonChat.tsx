"use client";
import Image from "next/image";

const ButtonChat = () => {
  const css = {
    wrapper: `h-12 w-12 box-border bg-white centralize br-50 fixed bottom-4 right-4 
    [box-shadow:0_0_15px_#00000017,0_4_8px_#0000001a] hover:scale-110 fast-trans`,
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
      <div className={`size-max centralize relative mb-[0.5px] ml-[1.5px]`}>
        <Image
          src={`/icons/whatsapp(1).png`}
          height={24}
          width={24}
          alt="imagem do whatssap"
          className={`contrast-125`}
        />
      </div>
    </div>
  );
};

export default ButtonChat;
