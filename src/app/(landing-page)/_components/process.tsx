import React from 'react';
import { Share2, Search, Heart } from 'lucide-react';
import { CallButton, MainImage } from '../_ui/index';
import { sectionHomeStyles } from '@app/(landing-page)/styles';

const css = {
  section: '',
  wrapper: 'block flex flex-col justify-center md:flex-row gap-3 xl:items-center',
  wrapperInfo: 'w-auto flex flex-col gap-6 md:w-1/2',
  wrapperImg: 'w-full md:w-1/2 flex flex-col gap-3',
};

const Process = (): React.ReactElement => {
  return (
    <section className={sectionHomeStyles}>
      <div className={`${css.wrapper}`}>
        <div className={`${css.wrapperInfo}`}>
          <Messages />
          <CallButton hideInMobile={true} wrapperStyles="justify-center" />
        </div>

        <div className={`${css.wrapperImg}`}>
          <MainImage />
          <CallButton wrapperStyles="justify-center" />
        </div>
      </div>
    </section>
  );
};

export default Process;

const content = [
  { id: 1, text: '1. Compartilhe o link nas redes sociais', icon: Share2 },
  {
    id: 2,
    text: '2. Seu cliente busca e favorita os produtos com facilidade',
    icon: Search,
  },
  {
    id: 3,
    text: '3 - Veja os favoritos do usuário. Mostrados um quadro intuitivo e organizado',
    icon: Heart,
  },
];

const Messages = () => {
  const css = {
    wrapper: 'w-auto flex items-start gap-3.5 sm:flex-row',
    wrapperP: 'flex items-center',
    p: `-mt-[1px] 5`,
    wrapperIcon: 'inline-flex items-end justify-center box-border mt-1 mr-2',
  };

  return (
    <>
      {content.map((item) => (
        <div className={`${css.wrapper}`} key={item.id}>
          <div className={`${css.wrapperP}`}>
            <p className={`${css.p}`}>
              <span className={`${css.wrapperIcon}`}>
                <item.icon className="text-magenta" strokeWidth={2.2} size={22} />
              </span>{' '}
              {item.text}.
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
