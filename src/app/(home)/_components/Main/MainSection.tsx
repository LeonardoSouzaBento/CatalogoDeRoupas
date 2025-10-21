import React from "react";
// import Image from "next/image";
import { ButtonCall } from "../Ui";
import ZapButton from "../Ui/ZapButton";

const Title = () => {
  const css = {
    title:
      "text-white font-bold max-w-120 lg:max-w-130 text-center font-h text-[1.800em] sm:text-[1.888em] md:text-[1.930em] lg:text-[2.015em] xl:text-[2.100em] 2xl:text-[2.185em] !leading-12",
    subtitle:
      "text-white font-h font-normal text-center max-w-110 lg:max-w-130 text-[1.300em] sm:text-[1.388em] md:text-[1.430em] lg:text-[1.515em] xl:text-[1.600em] 2xl:text-[1.685em]",
    strong: "text-[#F2AE27]",
    u: "decoration-2 decoration-teal-400 text-teal-400",
  };

  return (
    <>
      <h1 className={`${css.title}`}>
        Tenha um <strong className={`${css.strong}`}>catálogo online</strong>{" "}
        para mostrar seus produtos e{" "}
        <strong className={`${css.strong}`}>aumente suas vendas.</strong>
      </h1>
      <h2 className={`${css.subtitle}`}>
        <u className={`${css.u}`}>Facilite o processo de compra </u>e aumente a
        visibilidade da sua loja.
      </h2>
    </>
  );
};

export const MainP = () => {
  const css = {
    wrapperP:
      "w-full max-w-86 px-4 h-13 flex justify-center items-center gap-2 bg-black/5 rounded-xl",
    p: "!text-indigo-50 leading-6 w-max text-[1.203em] sm:text-[1.228em] md:text-[1.241em] lg:text-[1.265em] xl:text-[1.290em] 2xl:text-[1.315em]",
  };

  return (
    <div className={`${css.wrapperP}`}>
      <p className={`${css.p}`}>Experimente um mês grátis</p>
    </div>
  );
};

export const MainImage = () => {
  const css = {
    wrapperImg: "size-full",
    img: "block m-auto object-cover size-full",
  };

  return (
    <div className={`${css.wrapperImg}`}>
      {/* <Image src="" alt="" className={`${css.img}`} /> */}
    </div>
  );
};

//bg-linear-to-b from-[#b13975] to-[#A82366]

const css = {
  mainSection:
    "!h-auto !w-full !max-w-none !rounded-none !border-none !bg-linear-to-t from-[#b13975] to-[#A82366]",
  wrapper: "m-auto max-w-[1200px] flex flex-col md:flex-row gap-8",
  wrapperMainMessage:
    "w-full max-w-[1024px] flex flex-col justify-center items-center gap-4 md:gap-5 md:w-1/2",
  wrapperImg: "h-130 w-full max-w-[1024px] flex flex-col gap-6 md:w-1/2",
};

const MainSection = (): React.ReactElement => {
  return (
    <section className={`${css.mainSection}`}>
      <div className={`${css.wrapper}`}>
        <div className={`${css.wrapperMainMessage}`}>
          <Title />
          <MainP />
          <ButtonCall text="one" hideInMobile={true} />
          <ZapButton />
        </div>
        <div className={`${css.wrapperImg}`}>
          <MainImage />
          <ButtonCall text="one" specifStyles="justify-center" />
          {/* <ZapButton/> */}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
