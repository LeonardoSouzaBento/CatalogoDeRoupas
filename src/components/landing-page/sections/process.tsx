import React from 'react';
import { MainImage, SectionDescription, SectionHeader, SectionTitle } from '../ui/index';

const content = [
  { id: 1, text: 'Compartilhe o link nas redes sociais' },
  {
    id: 2,
    text: 'Seu cliente busca e favorita os produtos com facilidade',
  },
  {
    id: 3,
    text: 'Veja os favoritos do usuário. Mostrados em um quadro intuitivo e organizado',
  },
];

const css = {
  section: '',
  contentWrapper: `pt-[1cap] border-dashed border-t-2 border-border/50`,
  wrapperInfo: 'w-full flex flex-col gap-6',
};

const Process = (): React.ReactElement => {
  return (
    <section className="landing-page-section w-full">
      <div className="landing-page-content-wrapper">
        <SectionHeader className="items-start">
          <SectionTitle>Como Funciona?</SectionTitle>
          <SectionDescription>É simples</SectionDescription>
        </SectionHeader>
        <div className={`${css.contentWrapper}`}>
          <div className={`${css.wrapperInfo}`}>
            <Messages />
          </div>
        </div>
      </div>
      <MainImage src="/home/phone4.png" />
    </section>
  );
};

export { Process };

const Messages = () => {
  const css = {
    wrapper: 'w-auto flex items-start gap-4 sm:flex-row',
    textWrapper: 'flex items-start gap-3',
  };

  return (
    <>
      {content.map((item, index) => (
        <div className={`${css.wrapper}`} key={item.id}>
          <div className={`${css.textWrapper}`}>
            <div className={`-mt-1.5`}>
              <strong className="text-lg text-female">{index + 1}.</strong> {item.text}
            </div>
          </div>
        </div>
      ))}
      <div className="h-[1.06em]" />
    </>
  );
};
