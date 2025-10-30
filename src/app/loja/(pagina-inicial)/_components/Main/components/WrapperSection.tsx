import React from "react";

type Props = {
  child: React.ReactElement;
  sectionStyles?: string;
  wrapperStyles?: string;
};

const css = {
  section: `w-full px-3`,
  wrapper: `w-full max-w-[1180px] m-auto pt-6 pb-9`,
};

const WrapperSection = ({ child, sectionStyles, wrapperStyles }: Props) => {
  return (
    <section className={`${css.section} ${sectionStyles}`}>
      <div className={`${css.wrapper} ${wrapperStyles}`}>{child}</div>
    </section>
  );
};

export default WrapperSection;
