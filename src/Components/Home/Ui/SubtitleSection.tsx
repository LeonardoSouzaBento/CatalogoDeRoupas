import React from "react";

//border-b border-gray-300

const css = {
  css: "text-gray-500 font-normal font-p text-center mb-7 pb-2 text-[1.230em] sm:text-[1.259em] md:text-[1.273em] lg:text-[1.302em] xl:text-[1.330em] 2xl:text-[1.358em]",
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
