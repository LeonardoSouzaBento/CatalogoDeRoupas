import React from "react";
import { CalendarHeart, Eye, UserCheck } from "lucide-react";
import { ButtonCall, IconCheck, MainImage } from "./components/index";
import { sectionHomeStyles } from "@app/(landing-page)/styles";

const css = {
  wrapper: "block md:flex md:gap-7",
  wrapperInfo: "w-full md:w-1/2",
  wrapperImg: "w-full md:w-1/2 flex flex-col gap-3",
};

const WhySection = (): React.ReactElement => {
  return (
    <section className={sectionHomeStyles}>
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

const content = [
  { id: 1, text: "Um mês grátis para expor suas peças", icon: CalendarHeart },
  {
    id: 2,
    text: "Veja facilmente as peças que o cliente quer. Seu cliente faz uma lista de favoritos clicando no coração",
    icon: Eye,
  },
  {
    id: 3,
    text: "Suporte humano para te ajudar a cadastrar seus produtos de modo fácil e rápido e tirar suas dúvidas",
    icon: UserCheck,
  },
];

export const TextContent = () => {
  const css = {
    wrapperP: "flex gap-4 items-start mb-6 sm:max-w-142 md:max-w-full m-auto",
    p: `-mt-[7px] leading-8 p-landing-page`,
    strong: "font-semibold",
    wrapperIcon:
      "inline-flex items-center justify-center bg-[#E8F9EE] p-1 br-sm",
  };

  return (
    <>
      {content.map((item) => (
        <div className={`${css.wrapperP}`} key={item.id}>
          <div className="w-8 h-8 flex items-start justify-center box-border mb-1">
            <item.icon color="#DF2080" strokeWidth={2.2} size={23.5} />
          </div>
          <p className={`${css.p}`}>
            {item.text} <IconCheck />
          </p>
        </div>
      ))}
    </>
  );
};
