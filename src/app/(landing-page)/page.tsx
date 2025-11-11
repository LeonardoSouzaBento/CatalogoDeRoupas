import LogoSection from "./_components/LogoSection";
import { TitleSubtitleSection } from "./_components/Main/components";
import {
  WhySection,
  PlansSection,
  MainSection,
  HowSection,
} from "./_components/Main/index";

// segundo branco: #FFFFFF

export default function Home() {
  const css = {
    wrapperTwoSections: `xl:mb-7 xl:w-auto xl:h-[712px] xl:m-auto pt-6 xl:flex xl:gap-6 xl:px-[calc((100%-1280px)/2)] xl:items-start xl:justify-center`,
    wrapperSection: "xl:w-[calc(100%-14px)] xl:h-[546px]",
  };

  return (
    <div className="bg-gray-50">
      <LogoSection page="landing-page" />
      <main>
        {/* Seção principal */}
        <MainSection />
        <div className={`${css.wrapperTwoSections}`}>
          {/* Seção "porque" */}
          <div className={`${css.wrapperSection}`}>
            <TitleSubtitleSection
              title="Porque ter um catálogo?"
              subtitle="Ajudamos você a vender mais"
              secondSection={true}
            />
            <WhySection />
          </div>
          {/* Seção "como" */}
          <div className={css.wrapperSection}>
            <TitleSubtitleSection
              title="Como Funciona?"
              subtitle="É simples"
              thirdSection={true}
            />
            <HowSection />
          </div>
        </div>
        {/* Seção dos planos */}
        <div className="pb-9">
          <TitleSubtitleSection
            title="Quanto Custa?"
            subtitle="Temos preços acessíveis"
          />
          <PlansSection />
        </div>
      </main>
    </div>
  );
}
