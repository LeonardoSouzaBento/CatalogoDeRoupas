import React from "react";
import {
  IconCheck,
  TitleSection,
  SubtitleSection,
  ButtonCall,
  MainImage,
} from "../Ui/index";

export const TextContent = () => {
  const css = {
    wrapperP: "flex gap-3 items-start mb-6 sm:max-w-142 md:max-w-full m-auto",
    p: "text-gray-800 -mt-[7px] leading-8 text-[1.160em] sm:text-[1.183em] md:text-[1.195em] lg:text-[1.217em] xl:text-[1.240em] 2xl:text-[1.263em]",
    strong: "font-medium",
  };

  return (
    <>
      <div className={`${css.wrapperP}`}>
        <IconCheck />
        <p className={`${css.p}`}>
          <strong className={`${css.strong}`}>Um mês grátis</strong> para expor
          suas peças.
        </p>
      </div>
      <div className={`${css.wrapperP}`}>
        <IconCheck />
        <p className={`${css.p}`}>
          <strong className={`${css.strong}`}>
            Veja facilmente as peças que o cliente quer.
          </strong>{" "}
          Seu cliente faz uma lista de favoritos clicando no coração.
        </p>
      </div>
      <div className={`${css.wrapperP}`}>
        <IconCheck />
        <p className={`${css.p}`}>
          <strong className={`${css.strong}`}>Suporte humano</strong> para te
          ajudar a cadastrar seus produtos de modo facil e rápido em caso de
          dúvidas.
        </p>
      </div>
    </>
  );
};

const css = {
  section: "",
  wrapper: "block md:flex md:gap-7",
  wrapperInfo: "w-full md:w-1/2",
  wrapperImg: "w-full md:w-1/2 flex flex-col gap-3 border border-gray-300",
};

const WhySection = (): React.ReactElement => {
  return (
    <section className={`${css.section}`}>
      <TitleSection title="Porque ter um catálogo?" />
      <SubtitleSection title="Ajudamos você a vender mais" />

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
