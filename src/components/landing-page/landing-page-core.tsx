import React from 'react';
import { Hero, LogoSection, Plans, Process, Questions } from './sections';
import { TitleSubtitle } from './ui';
import { ZapFixedButton } from '@/components/ui/index';

const css = {
  wrapperTwoSections: `xl:mb-7 xl:w-auto xl:h-[712px] xl:m-auto pt-6 xl:flex xl:gap-6 xl:px-[calc((100%-1280px)/2)] xl:items-start xl:justify-center`,
  wrapperSection: 'xl:w-[calc(100%-14px)] xl:h-[546px]',
};

const LandingPageCore = () => {
  return (
    <div className="landing-page">
      <LogoSection page="landing-page" />
      <main className="bg-linear-to-t from-body-background via-white to-white z-0">
        {/* Seção principal */}
        <Hero />
        <div className={`${css.wrapperTwoSections}`}>
          {/* Seção "porque" */}
          <div className={`${css.wrapperSection}`}>
            <TitleSubtitle
              title="Porque ter um catálogo?"
              subtitle="Ajudamos você a vender mais"
              secondSection={true}
            />
            <Questions />
          </div>
          {/* Seção "como" */}
          <div className={css.wrapperSection}>
            <TitleSubtitle title="Como Funciona?" subtitle="É simples" thirdSection={true} />
            <Process />
          </div>
        </div>
        {/* Seção dos planos */}
        <div className={`pb-9`}>
          <TitleSubtitle title="Quanto Custa?" subtitle="Temos preços acessíveis" />
          <Plans />
        </div>
      </main>
      <ZapFixedButton myNumber={true} />
    </div>
  );
};

export default LandingPageCore;
