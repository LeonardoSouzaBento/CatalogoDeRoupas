import React from 'react';
import { CalendarHeart, Eye, UserCheck } from 'lucide-react';
import { CTAButton, IconCheck, MainImage } from '../ui/index';
import { sectionHomeStyles } from '@app/(landing-page)/styles';
import { Icon } from '@/components/ui';

const css = {
  wrapper: 'block md:flex md:gap-7',
  wrapperInfo: 'w-full md:w-1/2',
  wrapperImg: 'w-full md:w-1/2 flex flex-col gap-3',
};

const Questions = (): React.ReactElement => {
  return (
    <div className={sectionHomeStyles}>
      <div className={`${css.wrapper}`}>
        <div className={`${css.wrapperInfo}`}>
          <TextContent />
          <CTAButton classNames={['justify-center', '']} hideInMobile={true} />
        </div>

        <div className={`${css.wrapperImg}`}>
          <MainImage src="/home/phone4.png" />
          <CTAButton classNames={['justify-center', '']} />
        </div>
      </div>
    </div>
  );
};

export { Questions };

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

export const TextContent = () => {
  const css = {
    wrapperP: 'flex gap-3 items-start mb-6 sm:max-w-142 md:max-w-full m-auto',
    p: `-mt-[7px] leading-8 5`,
    strong: 'font-semibold',
    wrapperIcon: 'inline-flex items-center justify-center bg-[#E8F9EE] p-1 br-sm',
  };

  return (
    <>
      {content.map((item) => (
        <div className={`${css.wrapperP}`} key={item.id}>
          <div className="w-8 h-8 flex items-start justify-center box-border mb-1">
            <Icon
              LucideIcon={item.icon}
              className="text-female mt-1"
              size="xl"
              strokeValue={'thin'}
            />
          </div>
          <p className={`${css.p}`}>
            {item.text} <IconCheck />
          </p>
        </div>
      ))}
    </>
  );
};
