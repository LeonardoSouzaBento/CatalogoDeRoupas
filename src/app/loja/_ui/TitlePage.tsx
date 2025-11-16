import React from "react";

const css = {
  wrapper: `h-14 box-border px-3 pl-[13px] mb-3 bg-stone-800 flex items-center justify-center br-0`,
  h1: `w-full text-white font-bold leading-none capitalize text-[1.171428em] mt-px trancinkg-[0.24px]`,
};

const TitlePage = ({ title, styles}: { title: string, styles?:string }): React.ReactElement => {
  return (
    <div className={`${css.wrapper}`}>
      <h1 className={`${css.h1} ${styles}`}>{title}</h1>
    </div>
  );
};

export default TitlePage;
