import React from 'react';
import { CTAButton, CheckIcon, SectionDescription, SectionHeader, SectionTitle } from '../ui/index';
import { cn } from '@/lib/utils';

const plans = [
  {
    title: 'Plano Básico',
    subtitle: 'Um mês de teste grátis!',
    features: [
      'Cadastre até 200 peças',
      'Logo Simples (O nome da sua loja)',
      'Link direto para seu Whatsapp',
      'Painel de favoritos',
      'Suporte humanizado',
    ],
    emphasis: false,
  },
  {
    title: 'Plano Completo',
    subtitle: 'Tudo o que você precisa!',
    features: [
      'Cadastro ilimitado de peças',
      'Logo própria, insira a logo da sua loja',
      'Cores personalizadas, mude a paleta de cores do site como desejar',
      '+ Todos os recursos do plano básico',
    ],
    emphasis: true,
  },
];

const css = {
  card: `w-full xl:h-full m-auto rounded-2xl`,
  container: 'grid grid-cols-1 pre-lg:grid-cols-2 gap-6',
  wrapper: `w-full max-w-2xl mx-auto bg-white p-6 pt-4 rounded-2xl border border-gray-100 shadow-lg hover:scale-101 trans
    [&>p]:mb-1 [&>p]:large-text`,
  emphasis:
    'border-[4px] border-yellow-400 bg-[linear-gradient(135deg,#df2081,#8e22c2)] shadow-none',
  item: `flex gap-2 py-2.5`,
};

const Plans = (): React.ReactElement => {
  return (
    <section className={`landing-page-section p-6 pt-3 md:max-w-max lg:max-w-5xl 
    xl:max-w-274 border-dashed border-2 border-female/22`}>
      <SectionHeader>
        <SectionTitle>Quanto Custa?</SectionTitle>
        <SectionDescription>Temos preços acessíveis</SectionDescription>
      </SectionHeader>
      <div className={`${css.card}`}>
        <div className={`${css.container}`}>
          {plans.map((plan, index) => (
            <div key={index} className={cn(css.wrapper, plan.emphasis && css.emphasis)}>
              <h4 className={plan.emphasis ? 'text-white' : ''}>{plan.title}</h4>
              <p className={plan.emphasis ? 'text-white' : 'text-muted-foreground'}>
                {plan.subtitle}
              </p>
              <ul className={`mb-2 last:mb-0`}>
                {plan.features.map((item, index) => (
                  <li key={index} className={cn(css.item, plan.emphasis && 'text-white')}>
                    <CheckIcon section={plan.emphasis ? 'plans' : undefined} /> {item}
                  </li>
                ))}
              </ul>
              <CTAButton hideInMobile={true} classNames={['max-w-none', 'w-full']} />
              <CTAButton classNames={['max-w-none', 'w-full']} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Plans };
