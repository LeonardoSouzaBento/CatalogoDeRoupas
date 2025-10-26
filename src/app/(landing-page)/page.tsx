import LogoHeader from "./_components/LogoHeader";
import {
  WhySection,
  PlansSection,
  MainSection,
  HowSection,
} from "./_components/Main/index";

export default function Home() {
  const css = {
    wrapper: `xl:my-7 xl:w-auto xl:h-[700px] xl:flex xl:gap-7 xl:px-14 xl:items-start 
    xl:justify-items-start `,
  };

  return (
    <>
      <LogoHeader page="landing-page"/>
      <main className="pb-4 xl:pb-9">
        <MainSection />
        <div className={`${css.wrapper}`}>
          <WhySection />
          <HowSection />
        </div>
        <PlansSection />
      </main>
    </>
  );
}
