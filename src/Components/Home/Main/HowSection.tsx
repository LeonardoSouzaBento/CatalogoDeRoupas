import React from "react";
import {
  ButtonCall,
  TitleSection,
  SubtitleSection,
  MainImage,
} from "../Ui/index";

const Messages = () => {
  const css = {
    wrapper: "w-auto mb-6 flex items-start gap-3 sm:flex-row ",
    wrapperP: "flex items-center",
    wrapperPNumber:
      "h-8 min-w-8 flex justify-center items-center rounded-[50%] bg-teal-500",
    pNumber:
      "!text-white font-semibold font-p text-[1.200em] sm:text-[1.250em] md:text-[1.274em] lg:text-[1.322em] xl:text-[1.370em] 2xl:text-[1.418em]",
    p: "font-p text-gray-800 font-normal -mt-[1px] text-left text-[1.320em] sm:text-[1.343em] md:text-[1.355em] lg:text-[1.377em] xl:text-[1.400em] 2xl:text-[1.423em]",
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
            Seu cliente <strong> busca e favorita</strong> os produtos com
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
            <strong>Veja os favoritos do usuário</strong> de modo organizado.
          </p>
        </div>
      </div>
    </>
  );
};

const css = {
  section: "",
  wrapper: "block flex flex-col md:flex-row gap-3",
  wrapperInfo: "w-auto flex flex-col gap-3 md:gap-6 md:w-1/2",
  wrapperImg: "w-full md:w-1/2 flex flex-col gap-3 border border-gray-300",
};

const HowSection = (): React.ReactElement => {
  return (
    <section className={`${css.section}`}>
      <TitleSection title="Como Funciona?" />
      <SubtitleSection title="É simples" />

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
