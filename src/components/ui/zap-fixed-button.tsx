'use client';
import Image from 'next/image';

export const ZapFixedButton = ({ myNumber }: { myNumber?: boolean }) => {
  const css = {
    wrapper: `size-11 box-border bg-success-500 flex-center rounded-xl crop fixed bottom-6 right-6 z-6
    [box-shadow:0_0_15px_#00000017,0_4_8px_#0000001a] hover:scale-[108.334%] transition-200 shadow-green-soft`,
  };

  function handleOpenChat() {
    const phoneNumber = myNumber ? '5534984125832' : '5534984125832';
    const message = myNumber ? 'Olá! Gostaria de mais informações.' : '';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  return (
    <div className={`${css.wrapper}`} onClick={handleOpenChat}>
      <Image
        src={`/icons/zap-fixed-button.png`}
        fill
        alt="imagem do whatssap"
        className="mb-1 ml-px"
      />
    </div>
  );
};
