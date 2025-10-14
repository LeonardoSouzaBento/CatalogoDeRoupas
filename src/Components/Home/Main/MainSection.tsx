import React from "react";
import Image from "next/image";
import IconCheck from "../Ui/IconCheck";
import { ButtonCall } from "../Ui";

const Title = () => {
  const css = {
    title:
      "text-emerald-500 font-bold max-w-120 lg:max-w-130 text-center font-h text-[1.8em] sm:text-[1.834em] md:text-[1.937em] lg:text-[2.144em] xl:text-[2.350em] 2xl:text-[2.556em] !leading-10}",
    subtitle:
      "pb-3 font-h font-light text-center max-w-110 lg:max-w-130 text-indigo-100 text-[1.350em] sm:text-[1.376em] md:text-[1.453em] lg:text-[1.608em] xl:text-[1.763em] 2xl:text-[1.917em]",
    strong: "text-indigo-50 font-bold",
    u: "decoration-2",
  };

  return (
    <>
      <h1 className={`${css.title}`}>
        Tenha um{" "}
        <strong className={`${css.strong}`}>catálogo online</strong>{" "}
        para mostrar seus produtos e{" "}
        <strong className={`${css.strong}`}>aumente suas vendas</strong>.
      </h1>
      <h2 className={`${css.subtitle}`}>
        <u className={`${css.u}`}>Facilite o processo de compra </u>e aumente a visibilidade da sua
        loja.
      </h2>
    </>
  );
};

export const MainP = () => {
  const css = {
    wrapperInfo: "w-full h-auto flex justify-center items-center gap-2",
    pInfo: "!text-indigo-50 w-max text-[1.2em] xl:text-[1.3em]",
  };

  return (
    <div className={`${css.wrapperInfo}`}>
      <IconCheck variation="mainSection" />
      <p className={`${css.pInfo}`}>Experimente um mês grátis</p>
    </div>
  );
};

export const MainImage = () => {
  const css = {
    wrapperImg: "size-full",
    img: "block max-w-120 m-auto object-cover size-full",
  };

  return (
    <div className={`${css.wrapperImg}`}>
      <Image src="" alt="" className={`${css.img}`} />
    </div>
  );
};

const css = {
  mainSection:
    "!h-auto !w-full !max-w-none !rounded-none !shadow-none !border-none !bg-violet-800 flex flex-col md:flex-row gap-8",
  wrapperMainMessage: "w-full flex flex-col justify-center items-center gap-3 md:gap-6 md:w-1/2",
  wrapperImg: "h-130 w-full flex flex-col gap-6 md:w-1/2",
};

const MainSection = (): React.ReactElement => {
  return (
    <section className={`${css.mainSection}`}>
      <div className={`${css.wrapperMainMessage}`}>
        <Title />
        <MainP />
        <ButtonCall text="one" hideInMobile={true}/>
      </div>
      <div className={`${css.wrapperImg}`}>
        <MainImage />
        <ButtonCall text="one" specifStyles="justify-center"/>
      </div>
    </section>
  );
};

export default MainSection;
