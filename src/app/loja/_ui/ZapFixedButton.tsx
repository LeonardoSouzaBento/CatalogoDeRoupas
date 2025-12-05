"use client";
import Image from "next/image";

const ZapFixedButton = ({ myNumber }: { myNumber?: boolean }) => {
  const css = {
    wrapper: `size-12 box-border bg-green-600 centralize br-xl fixed bottom-4 right-4 z-6
    [box-shadow:0_0_15px_#00000017,0_4_8px_#0000001a] hover:scale-[108.334%] fast-trans shadow-green-soft`,
  };

  function handleOpenChat() {
    const phoneNumber = myNumber ? "5534984125832" : "5534984125832";
    const message = myNumber ? "Olá! Gostaria de mais informações." : "";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }

  return (
    <div className={`${css.wrapper}`} onClick={handleOpenChat}>
      <div className={`size-max centralize relative mb-[0.5px] ml-[1.5px]`}>
        <Image
          src={`/icons/white-whatsapp.png`}
          height={26}
          width={26}
          alt="imagem do whatssap"
          className="mb-px"
        />
      </div>
    </div>
  );
};

export default ZapFixedButton;
