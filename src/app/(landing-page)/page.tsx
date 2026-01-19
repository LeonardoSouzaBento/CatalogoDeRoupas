import { ZapFixedButton } from '../_ui';
import { TitleSubtitle } from './_ui';
import { Questions, Plans, Hero, Process, LogoSection } from './_components/index';
import '../css/landing-page.css';
// segundo branco: #FFFFFF

export default function Home() {
  const css = {
    wrapperTwoSections: `xl:mb-7 xl:w-auto xl:h-[712px] xl:m-auto pt-6 xl:flex xl:gap-6 xl:px-[calc((100%-1280px)/2)] xl:items-start xl:justify-center`,
    wrapperSection: 'xl:w-[calc(100%-14px)] xl:h-[546px]',
  };

  return (
    <div className="landing-page">
      <LogoSection page="landing-page" />
      <main>
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
}
