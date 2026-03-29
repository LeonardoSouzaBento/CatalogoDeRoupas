"use client";
import { ZapFixedButton } from "@/components/ui/index";
import { Hero, Logo, Plans, Process, Questions } from "./sections";

const css = {
  main: `px-4 pt-6 pb-10 sm:px-6 md:px-8 lg:px-12 xl:px-14 
  bg-linear-to-t from-medium-bg via-light-bg to-light-bg z-0 space-y-8
  [&>section]:mx-auto`,
  firstWrapper: `h-max grid grid-cols-1 bp-930:grid-cols-2 gap-6 max-w-176 mx-auto bp-930:max-w-none
  xl:max-w-274`,
};

const LandingPageCore = () => {
  return (
    <div className="landing-page">
      <Logo />
      <Hero />
      <main className={css.main}>
        <div className={css.firstWrapper}>
          <Questions />
          <Process />
        </div>
        <Plans />
      </main>

      <ZapFixedButton myNumber={true} />
    </div>
  );
};

export default LandingPageCore;
