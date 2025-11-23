"use client";
import Image from "next/image";

const ZapFixedButton = () => {
  const css = {
    wrapper: `size-11 box-border bg-green-600 centralize br-lg fixed bottom-4 right-4 
    [box-shadow:0_0_15px_#00000017,0_4_8px_#0000001a] hover:scale-[108.334%] fast-trans shadow-green-soft`,
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
          src={`/icons/white-whatsapp.png`}
          height={26}
          width={26}
          alt="imagem do whatssap"
        />
      </div>
    </div>
  );
};

export default ZapFixedButton;
