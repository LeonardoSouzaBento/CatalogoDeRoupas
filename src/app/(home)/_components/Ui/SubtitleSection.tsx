import React from "react";

//border-b border-gray-300

const css = {
  css: "text-gray-500 font-normal font-p text-center mb-7 text-[1.280em] sm:text-[1.295em] md:text-[1.302em] lg:text-[1.316em] xl:text-[1.330em] 2xl:text-[1.344em]",
  plansSection: "",
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
