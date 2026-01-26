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

const Process = (): React.ReactElement => {
  return (
    <section className="landing-page-section w-full">
      <div className="landing-page-content-wrapper">
        <SectionHeader className="items-start">
          <SectionTitle>Como Funciona?</SectionTitle>
          <SectionDescription>É simples</SectionDescription>
        </SectionHeader>
        <div className={`w-full pt-4 flex flex-col gap-6 pb-4 pre-lg:pb-0 
          border-dashed border-t-2 border-border/50`}>
          <TextContent />
        </div>
      </div>
      <MainImage src="/home/phone4.png" />
    </section>
  );
};

export { Process };

const TextContent = () => {
  return (
    <>
      {content.map((item, index) => (
        <div className={`w-auto flex items-start gap-4 sm:flex-row`} key={item.id}>
          <div className={`flex items-start gap-3`}>
            <div className={`-mt-1.5`}>
              <strong className="text-lg text-female">{index + 1}.</strong> {item.text}
            </div>
          </div>
        </div>
      ))}
      <div className="hidden pre-lg:block h-[1.06em]" />
    </>
  );
};
