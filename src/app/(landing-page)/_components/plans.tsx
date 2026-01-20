import React from 'react';
import { CallButton, IconCheck } from '../_ui/index';

const basicPlan = [
  'Cadastre até 200 peças',
  'Logo Simples (O nome da sua loja)',
  'Link direto para seu Whatsapp',
  'Painel de favoritos',
  'Suporte humanizado',
];

const fullPlan = [
  'Cadastro ilimitado de peças',
  'Logo própria, insira a logo da sua loja',
  'Cores Personalizadas, mude as cores do site como desejar',
  '+ Todos os recursos do plano básico',
];

const css = {
  section:
    'w-[calc(100%-24px)] sm:w-[calc(100%-40px)] md:max-w-[980px] xl:h-full m-auto rounded-2xl',
  containerPlans: 'pb-2 flex flex-col gap-6 md:flex-row',
  wrapperPlan:
    'bg-white p-5 md:w-[49%] rounded-3xl border border-gray-100 shadow-lg hover:scale-102 trans',
  ul: 'mb-6 ',
  fullPlanStyles:
    'border-[4px] border-yellow-400 bg-[linear-gradient(135deg,#df2081,#8e22c2)] shadow-none',
};

const Plans = (): React.ReactElement => {
  return (
    <section className={`${css.section}`}>
      <div className={`${css.containerPlans}`}>
        <div className={`${css.wrapperPlan}`}>
          <TitleAndSubtitle title="Plano Básico" subtitle="Um mês de teste grátis!" />

          <ul className={`${css.ul}`}>
            {basicPlan.map((item, index) => (
              <ItemLIst text={item} key={index} />
            ))}
          </ul>

          <CallButton hideInMobile={true} buttonStyles="md:max-w-none!" />
          <CallButton />
        </div>

        <div className={`${css.wrapperPlan} ${css.fullPlanStyles}`}>
          <TitleAndSubtitle title="Plano Completo" subtitle="Tudo o que você precisa!" fullPlan={true} />

          <ul className={`${css.ul}`}>
            {fullPlan.map((item, index) => (
              <ItemLIst text={item} key={index} fullPlan={true} />
            ))}
          </ul>
          <CallButton hideInMobile={true} buttonStyles="md:max-w-none!" />
          <CallButton />
        </div>
      </div>
    </section>
  );
};

export default Plans;

const TitleAndSubtitle = ({ title, subtitle, fullPlan }: { title: string; subtitle: string; fullPlan?: boolean }) => {
  const css = {
    title: 'text-gray-800 font-semibold ',
    subtitle: 'text-gray-600 mb-4 font-light 5',
  };

  return (
    <>
      <h4 className={`${css.title} ${fullPlan && 'text-white!'}`}>{title}</h4>
      <h6 className={`${css.subtitle} ${fullPlan && 'text-white!'}`}>{subtitle}</h6>
    </>
  );
};

const ItemLIst = ({ text, fullPlan }: { text: string; fullPlan?: boolean }): React.ReactElement => {
  return (
    <li className={`flex gap-3 py-2.5 px-1 5 ${fullPlan && 'text-white!'}`}>
      <IconCheck section={fullPlan ? 'plansSection' : ''} /> {text}
    </li>
  );
};
