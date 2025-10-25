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
    h1: `font-h text-gray-900 font-semibold capitalize tracking-normal text-center text-[1.380em] sm:text-[1.409em] md:text-[1.423em] lg:text-[1.452em] xl:text-[1.480em] 2xl:text-[1.508em]`,
    h1v2: "text-gray-900 font-h font-normal text-center text-[1.148em] sm:text-[1.160em] md:text-[1.166em] lg:text-[1.178em] xl:text-[1.189em] 2xl:text-[1.200em]",
    h2: `w-full mb-7 font-h font-light text-center text-neutral-600 text-[1.130em] sm:text-[1.136em] md:text-[1.139em] lg:text-[1.144em] xl:text-[1.150em] 2xl:text-[1.156em] cursor-default`,
  };

  return (
    <div>
      <h1
        className={`${!genderSection && css.h1} ${genderSection && css.h1v2}`}
      >
        {title}
      </h1>
      <h2 className={`${css.h2}`}>{subtitle}</h2>
    </div>
  );
};

export default HomeTitleSubtitle;
