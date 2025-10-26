import LogoHeader from "./_components/LogoHeader";
import { TitleSubtitleSection } from "./_components/Main/components";
import {
  WhySection,
  PlansSection,
  MainSection,
  HowSection,
} from "./_components/Main/index";

export default function Home() {
  const css = {
    wrapperTwoSections: `xl:mb-7 xl:w-auto xl:h-[654px] xl:m-auto xl:mb-7 xl:flex xl:gap-6 xl:max-w-[1280px] xl:items-start 
    xl:justify-center`,
    wrapperSection: "xl:w-[calc(100%-14px)] xl:h-[546px]",
  };

  return (
    <div className="bg-gray-50">
      <LogoHeader page="landing-page" />
      <main className="pb-4 xl:pb-9">
        <MainSection />
        <div className={`${css.wrapperTwoSections}`}>
          <div className={css.wrapperSection}>
            <TitleSubtitleSection
              title="Porque ter um catálogo?"
              subtitle="Ajudamos você a vender mais"
              secondSection={true}
            />
            <WhySection />
          </div>

          <div className={css.wrapperSection}>
            <TitleSubtitleSection
              title="Como Funciona?"
              subtitle="É simples"
              thirdSection={true}
            />
            <HowSection />
          </div>
        </div>
        <PlansSection />
      </main>
    </div>
  );
}
