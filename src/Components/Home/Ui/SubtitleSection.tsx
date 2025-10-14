import React from "react";

const css = {
  css: "text-violet-800 font-normal text-center mb-7 text-[1.440em] sm:text-[1.487em] md:text-[1.509em] lg:text-[1.555em] xl:text-[1.600em] 2xl:text-[1.645em] border-b border-gray-200 pb-2",
  plansSection: "!mb-6",
};

const SubtitleSection = ({
  title,
  section,
}: {
  title?: string;
  section?: string;
}): React.ReactElement => {
  return (
    <h3
      className={`${css.css} ${section === "plansSection" && css.plansSection}`}
    >
      {title}
    </h3>
  );
};

export default SubtitleSection;
