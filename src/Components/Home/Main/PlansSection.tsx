import React from "react";
import TitleSection from "../Ui/TitleSection";
import SubtitleSection from "../Ui/SubtitleSection";
import IconCheck from "../Ui/IconCheck";
import { ButtonCall } from "../Ui/";

const basicPlan = [
  "Cadastre até 200 peças",
  "Logo Simples (O nome da sua loja)",
  "Link direto para seu Whatsapp",
  "Painel de favoritos",
];

const fullPlan = [
  "Sem limite de cadastro de peças",
  "Logo própria, adcione a imagem do logo da sua loja",
  "Cores Personalizadas, mude as cores do site como desejar",
  "+ Tudo do que tem no plano básico",
];

const TitleAndSubtitle = ({ h2, h3 }: { h2: string; h3: string }) => {
  const css = {
    h2: "text-gray-800 leading-8 font-h font-semibold text-[1.310em] sm:text-[1.330em] md:text-[1.340em] lg:text-[1.360em] xl:text-[1.380em] 2xl:text-[1.400em]",
    h3: "text-gray-500 mb-4 pb-2 font-h font-normal text-[1.235em] sm:text-[1.254em] md:text-[1.263em] lg:text-[1.282em] xl:text-[1.300em] 2xl:text-[1.318em]",
  };

  return (
    <>
      <h2 className={`${css.h2}`}>{h2}</h2>
      <h3 className={`${css.h3}`}>{h3}</h3>
    </>
  );
};

const ItemLIst = ({ text }: { text: string }): React.ReactElement => {
  const css = {
    li: "flex gap-3 pt-2 pb-3 px-1 text-gray-800 font-normal text-[1.270em] sm:text-[1.293em] md:text-[1.305em] lg:text-[1.327em] xl:text-[1.350em] 2xl:text-[1.373em]",
  };

  return (
    <li className={`${css.li}`}>
      <IconCheck variation="plansSection" /> {text}
    </li>
  );
};

const css = {
  containerPlans: "pb-2 flex flex-col gap-7 md:flex-row",
  wrapperPlan:
    "bg-white p-5 md:w-[49%] rounded-3xl border border-gray-100 shadow-xl",
  ul: "mb-5 ",
};

const PlansSection = (): React.ReactElement => {
  return (
    <section className="!m-auto !bg-transparent !shadow-none">
      <TitleSection title="Quanto Custa?" />
      <SubtitleSection title="Temos preços acessíveis" section="plansSection" />

      <div className={`${css.containerPlans}`}>
        <div className={`${css.wrapperPlan}`}>
          <TitleAndSubtitle h2="Plano Básico" h3="Um mês de teste grátis!" />

          <ul className={`${css.ul}`}>
            {basicPlan.map((item, index) => (
              <ItemLIst text={item} key={index} />
            ))}
          </ul>

          <ButtonCall hideInMobile={true} />
          <ButtonCall />
        </div>

        <div className={`${css.wrapperPlan} border-[2.5px] border-pink-400/80`}>
          <TitleAndSubtitle h2="Plano Completo" h3="Tudo o que você precisa!" />

          <ul className={`${css.ul}`}>
            {fullPlan.map((item, index) => (
              <ItemLIst text={item} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
