import React from "react";

interface TitleSubtitleSectionProps {
  title: string;
  subtitle?: string;
  secondSection?: boolean;
  thirdSection?: boolean;
}

const css = {
  div: "w-[calc(100%-24px)] m-auto flex flex-col items-center pt-4 border-t-2 border-dashed bs-color",
  title:
    "text-stone-800 font-extrabold font-p text-center max-[375px]:leading-9 leading-11 text-[1.350em] sm:text-[1.397em] md:text-[1.419em] lg:text-[1.465em] xl:text-[1.510em] 2xl:text-[1.555em]",
  subtitle:
    "text-gray-600 font-p text-center mb-5 text-[1.220em] sm:text-[1.229em] md:text-[1.233em] lg:text-[1.242em] xl:text-[1.250em] 2xl:text-[1.258em]",
};

const TitleSubtitleSection = ({
  title,
  subtitle,
  secondSection,
  thirdSection,
}: TitleSubtitleSectionProps): React.ReactElement => {
  return (
    <div
      className={`${css.div} ${thirdSection && "xl:border-none"} ${
        secondSection && "border-none"
      }`}
    >
      <h2 className={`${css.title}`}>{title}</h2>
      {subtitle && <h3 className={`${css.subtitle}`}>{subtitle}</h3>}
    </div>
  );
};

export default TitleSubtitleSection;
