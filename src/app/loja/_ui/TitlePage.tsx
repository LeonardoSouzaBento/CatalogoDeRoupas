import React from "react";

const css = {
  wrapper: `h-14 box-border px-5 mb-4 bg-stone-800 flex items-center justify-start br-0`,
  h1: `text-white font-semibold leading-none text-[1.250em] sm:text-[1.265em] md:text-[1.272em] lg:text-[1.286em] xl:text-[1.300em] 2xl:text-[1.314em]`,
};

const TitlePage = ({ title }: { title: string }): React.ReactElement => {
  return (
    <div className={`${css.wrapper}`}>
      <h1 className={`${css.h1}`}>{title}</h1>
    </div>
  );
};

export default TitlePage;
