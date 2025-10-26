import React from "react";
import {
  ButtonCall,
  MainImage,
} from "../Main/components/index";
import { sectionHomeStyles } from "@/data/styles";
import { pStyles } from "../Main/components/styles";
import TitleSubtitleSection from "../Main/components/TitleSubtitleSection";

const css = {
  section: "",
  wrapper: "block flex flex-col justify-center md:flex-row gap-3",
  wrapperInfo: "w-auto flex flex-col gap-6 md:w-1/2 max-w-100",
  wrapperImg: "w-full md:w-1/2 flex flex-col gap-3",
};

const HowSection = (): React.ReactElement => {
  return (
    <section className={sectionHomeStyles}>
      <TitleSubtitleSection title="Como Funciona?" subtitle="É simples"/>

      <div className={`${css.wrapper}`}>
        <div className={`${css.wrapperInfo}`}>
          <Messages />
          <ButtonCall hideInMobile={true} specifStyles="justify-center"/>
        </div>

        <div className={`${css.wrapperImg}`}>
          <MainImage />
          <ButtonCall specifStyles="justify-center"/>
        </div>
      </div>
    </section>
  );
};

export default HowSection;

const Messages = () => {
  const css = {
    wrapper: "w-auto flex items-start gap-3 sm:flex-row ",
    wrapperP: "flex items-center",
    wrapperPNumber:
      "h-7 min-w-7 flex justify-center items-center rounded-[50%] bg-[#DF2080]",
    pNumber:
      "!text-white font-semibold font-p text-[1.200em] sm:text-[1.250em] md:text-[1.274em] lg:text-[1.322em] xl:text-[1.370em] 2xl:text-[1.418em]",
    p: `-mt-[1px] ${pStyles}`,
    strong: "font-medium",
  };

  return (
    <>
      <div className={`${css.wrapper}`}>
        <div className={`${css.wrapperPNumber}`}>
          <p className={`${css.pNumber}`}>1</p>
        </div>
        <div className={`${css.wrapperP}`}>
          <p className={`${css.p}`}>Compartilhe o link nas redes sociais</p>
        </div>
      </div>
      <div className={`${css.wrapper}`}>
        <div className={`${css.wrapperPNumber}`}>
          <p className={`${css.pNumber}`}>2</p>
        </div>
        <div className={`${css.wrapperP}`}>
          <p className={`${css.p}`}>
            Seu cliente <strong className={`${css.strong}`}> busca e favorita</strong> os produtos com
            facilidade.
          </p>
        </div>
      </div>
      <div className={`${css.wrapper}`}>
        <div className={`${css.wrapperPNumber}`}>
          <p className={`${css.pNumber}`}>3</p>
        </div>
        <div className={`${css.wrapperP}`}>
          <p className={`${css.p}`}>
            <strong className={`${css.strong}`}>Veja os favoritos do usuário</strong> de modo organizado.
          </p>
        </div>
      </div>
    </>
  );
};