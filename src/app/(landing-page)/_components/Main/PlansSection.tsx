import React from "react";
import {
  ButtonCall,
  IconCheck,
} from "./components/index";
import { pStyles } from "@app/(landing-page)/styles";

const basicPlan = [
  "Cadastre até 200 peças",
  "Logo Simples (O nome da sua loja)",
  "Link direto para seu Whatsapp",
  "Painel de favoritos",
];

const fullPlan = [
  "Cadastro ilimitado de peças",
  "Logo própria, insira a logo da sua loja",
  "Cores Personalizadas, mude as cores do site como desejar",
  "+ Todos os recursos do plano básico",
];

const css = {
  section:
    "w-[calc(100%-24px)] sm:w-[calc(100%-40px)] md:max-w-[980px] xl:h-full m-auto rounded-2xl",
  containerPlans: "pb-2 flex flex-col gap-6 md:flex-row",
  wrapperPlan:
    "bg-white p-5 md:w-[49%] rounded-3xl border border-gray-100 soft-shadow hover:scale-102 trans",
  ul: "mb-6 ",
  fullPlanStyles:
    "border-[4px] border-yellow-400 bg-[linear-gradient(135deg,#df2081,#8e22c2)] shadow-none",
};

const PlansSection = (): React.ReactElement => {
  return (
    <section className={`${css.section}`}>
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

        <div className={`${css.wrapperPlan} ${css.fullPlanStyles}`}>
          <TitleAndSubtitle
            h2="Plano Completo"
            h3="Tudo o que você precisa!"
            fullPlan={true}
          />

          <ul className={`${css.ul}`}>
            {fullPlan.map((item, index) => (
              <ItemLIst text={item} key={index} fullPlan={true} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;

const TitleAndSubtitle = ({
  h2,
  h3,
  fullPlan,
}: {
  h2: string;
  h3: string;
  fullPlan?: boolean;
}) => {
  const css = {
    h2: "text-gray-800 leading-10 font-p font-semibold text-[1.310em] sm:text-[1.330em] md:text-[1.340em] lg:text-[1.360em] xl:text-[1.380em] 2xl:text-[1.400em]",
    h3: "text-gray-600 mb-5 font-p font-light text-[1.160em] sm:text-[1.183em] md:text-[1.195em] lg:text-[1.217em] xl:text-[1.240em] 2xl:text-[1.263em]",
  };

  return (
    <>
      <h2 className={`${css.h2} ${fullPlan && "!text-white"}`}>{h2}</h2>
      <h3 className={`${css.h3} ${fullPlan && "!text-white"}`}>{h3}</h3>
    </>
  );
};

const ItemLIst = ({
  text,
  fullPlan,
}: {
  text: string;
  fullPlan?: boolean;
}): React.ReactElement => {
  return (
    <li
      className={`flex gap-3 py-2 px-1 ${pStyles} ${fullPlan && "!text-white"}`}
    >
      <IconCheck section={fullPlan ? "plansSection" : ""} /> {text}
    </li>
  );
};
