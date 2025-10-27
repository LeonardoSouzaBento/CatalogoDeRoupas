import React from "react";

const HomeTitleSubtitle = ({
  title,
  subtitle,
  genderSection,
}: {
  title: string;
  subtitle: string;
  genderSection?: boolean;
}) => {
  const css = {
    h1: `font-bold capitalize leading-10 tracking-normal text-center text-[1.240em] sm:text-[1.258em] md:text-[1.266em] lg:text-[1.283em] xl:text-[1.300em] 2xl:text-[1.317em]`,
    h1SelectGender: "font-medium text-center text-[1.148em] sm:text-[1.160em] md:text-[1.166em] lg:text-[1.178em] xl:text-[1.189em] 2xl:text-[1.200em]",
    h2: `w-full mb-7 font-light text-center text-neutral-700 text-[1.065em] sm:text-[1.081em] md:text-[1.089em] lg:text-[1.104em] xl:text-[1.120em] 2xl:text-[1.136em]`,
  };

  return (
    <div>
      <h1 className={genderSection ? css.h1SelectGender : css.h1}>
        {title}
      </h1>
      <h2 className={`${css.h2}`}>{subtitle}</h2>
    </div>
  );
};

export default HomeTitleSubtitle;
