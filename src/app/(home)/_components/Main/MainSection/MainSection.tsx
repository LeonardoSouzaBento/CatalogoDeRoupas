import React from "react";
import { ButtonCall } from "../../Ui";
import ZapButton from "../../Ui/ZapButton";
import MainImage from "./ui/MainImage";
import Title from "./ui/Title";
import Subtitle from "./ui/Subtitle";

const css = {
  mainSection:
    "h-auto w-full p-6 rounded-none border-none bg-linear-to-t from-[#b13975] to-[#A82366]",
  wrapper: "m-auto max-w-[1200px] flex flex-col md:flex-row gap-8",
  wrapperMainMessage:
    "w-full max-w-[1024px] flex flex-col justify-center items-center gap-4 md:gap-5 md:w-1/2",
  wrapperImg: "h-130 w-full max-w-[1024px] flex flex-col gap-6 md:w-1/2",
};

const MainSection = (): React.ReactElement => {
  return (
    <section className={`${css.mainSection}`}>
      <div className={`${css.wrapper}`}>
        <div className={`${css.wrapperMainMessage}`}>
          <Title />
          <Subtitle />
          <ButtonCall text="one" hideInMobile={true} />
          <ZapButton />
        </div>
        <div className={`${css.wrapperImg}`}>
          <MainImage />
          <ButtonCall text="one" specifStyles="justify-center" />
          {/* <ZapButton/> */}
        </div>
      </div>
    </section>
  );
};

export default MainSection;

//bg-linear-to-b from-[#b13975] to-[#A82366]