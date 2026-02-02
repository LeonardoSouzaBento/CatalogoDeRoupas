import { Icon } from '@/components/ui';
import { CalendarHeart, Eye, UserCheck } from 'lucide-react';
import React from 'react';
import { CheckIcon, MainImage, SectionDescription, SectionHeader, SectionTitle } from '../ui/index';

const content = [
  { id: 1, text: 'Um mês grátis para expor suas peças', icon: CalendarHeart },
  {
    id: 2,
    text: 'Veja facilmente as peças que o cliente quer. Seu cliente faz uma lista de favoritos clicando no coração',
    icon: Eye,
  },
  {
    id: 3,
    text: 'Suporte humano para te ajudar a cadastrar seus produtos de modo fácil e rápido e tirar suas dúvidas',
    icon: UserCheck,
  },
];

const css = {
  container: 'block grid grid-cols-1 gap-2',
  contentWrapper: `pt-4 border-dashed border-t-2 border-border/50`,
  infoWrapper: 'w-full',
  imageWrapper: 'w-full flex flex-col gap-3',
};

const Questions = (): React.ReactElement => {
  return (
    <section className="landing-page-section">
      <div className="landing-page-content-wrapper">
        <SectionHeader className="items-start">
          <SectionTitle>Porque ter um catálogo?</SectionTitle>
          <SectionDescription>Ajudamos você a vender mais</SectionDescription>
        </SectionHeader>
        <div className={css.contentWrapper}>
          <div className={css.container}>
            <div className={css.infoWrapper}>
              <TextContent />
            </div>
          </div>
        </div>
      </div>
      <MainImage src="/home/phone4.png" />
    </section>
  );
};

export { Questions };

const TextContent = () => {
  return (
    <>
      {content.map((item) => (
        <div key={item.id} className={`flex gap-3 items-start mb-4`}>
          <Icon
            LucideIcon={item.icon}
            className="text-theme mt-1"
            size="xl"
            strokeWidth={'thin'}
            fill="var(--color-primary-50)"
          />
          <div className={`-mt-1.5`}>
            {item.text} <CheckIcon />
          </div>
        </div>
      ))}
    </>
  );
};
