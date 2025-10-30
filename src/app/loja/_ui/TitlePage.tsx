import React from "react";

const css = {
  wrapper: `h-[64px] box-border px-5 mb-4 bg-stone-800 flex items-center justify-start br-0`,
  h1: `text-white font-semibold leading-none capitalize text-[1.240em] sm:text-[1.258em] md:text-[1.266em] lg:text-[1.283em] xl:text-[1.300em] 2xl:text-[1.317em] `,
};

const TitlePage = ({ title }: { title: string }): React.ReactElement => {
  return (
    <div className={`${css.wrapper}`}>
      <h1 className={`${css.h1}`}>{title}</h1>
    </div>
  );
};

export default TitlePage;
