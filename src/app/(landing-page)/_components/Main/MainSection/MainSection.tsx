import React from "react";
import { ButtonCall, ZapButton } from "../components/index";
import MainImage from "./ui/MainImage";
import TitleSubtitle from "./ui/TitleSubtitle";
import P from "./ui/P";

const css = {
  mainSection: `h-auto w-full pt-26 sm:pt-25 md:pt-23 xl:pt-21 p-6 mb-4 rounded-none 
  bg-[linear-gradient(135deg,hsl(330_75%_45%)_0%,hsl(280_70%_40%)_100%)]
`,
  wrapper: "m-auto max-w-[1200px] flex flex-col md:flex-row gap-8",
  wrapperMainMessage:
    "w-full max-w-[1024px] flex flex-col justify-center items-center gap-5 md:w-1/2",
  wrapperImg: "h-130 w-full max-w-[1024px] flex flex-col gap-6 md:w-1/2",
};

const MainSection = (): React.ReactElement => {
  return (
    <section className={`${css.mainSection}`}>
      <div className={`${css.wrapper}`}>
        <div className={`${css.wrapperMainMessage}`}>
          <TitleSubtitle />
          <P />
          <ButtonCall text="one" hideInMobile={true} />
          <ZapButton />
        </div>
        <div className={`${css.wrapperImg}`}>
          <MainImage />
          <ButtonCall text="one" specifStyles="justify-center" />
          <ZapButton hideInMobile={true} />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
