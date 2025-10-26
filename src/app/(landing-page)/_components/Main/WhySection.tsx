import React from "react";
import {
  IconCheck,
  ButtonCall,
  MainImage,
  TitleSubtitleSection,
} from "./components/index";
import { sectionHomeStyles } from "@/data/styles";
import { pStyles } from "./components/styles";

export const TextContent = () => {
  const css = {
    wrapperP: "flex gap-3 items-start mb-6 sm:max-w-142 md:max-w-full m-auto",
    p: `-mt-[7px] leading-8 ${pStyles}`,
    strong: "font-semibold",
  };

  return (
    <>
      <div className={`${css.wrapperP}`}>
        <IconCheck />
        <p className={`${css.p}`}>Um mês grátis para expor suas peças.</p>
      </div>
      <div className={`${css.wrapperP}`}>
        <IconCheck />
        <p className={`${css.p}`}>
          Veja facilmente as peças que o cliente quer. Seu cliente faz uma lista
          de favoritos clicando no coração.
        </p>
      </div>
      <div className={`${css.wrapperP}`}>
        <IconCheck />
        <p className={`${css.p}`}>
          Suporte humano para te ajudar a cadastrar seus produtos de modo facil
          e rápido em caso de dúvidas.
        </p>
      </div>
    </>
  );
};

const css = {
  section: "",
  wrapper: "block md:flex md:gap-7",
  wrapperInfo: "w-full md:w-1/2",
  wrapperImg: "w-full md:w-1/2 flex flex-col gap-3",
};

const WhySection = (): React.ReactElement => {
  return (
    <section className={sectionHomeStyles}>
      <TitleSubtitleSection
        title="Porque ter um catálogo?"
        subtitle="Ajudamos você a vender mais"
      />

      <div className={`${css.wrapper}`}>
        <div className={`${css.wrapperInfo}`}>
          <TextContent />
          <ButtonCall specifStyles="justify-center" hideInMobile={true} />
        </div>

        <div className={`${css.wrapperImg}`}>
          <MainImage />
          <ButtonCall specifStyles="justify-center" />
        </div>
      </div>
    </section>
  );
};

export default WhySection;
