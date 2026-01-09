import React from "react";

const css = {
  wrapper: `w-full h-13 pl-6 flex i-center j-start`,
  title: `font-semibold text-neutral-500 tracking-wide p195`,
};

const Subtitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <div className={`${css.wrapper}`}>
      <p className={`${css.title}`}>{subtitle}</p>
    </div>
  );
};

export default Subtitle;
