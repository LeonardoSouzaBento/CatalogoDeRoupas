import React from "react";

const TitleSection = ({ title }: { title: string }): React.ReactElement => {
  return (
    <h2 className="text-stone-800 font-bold text-center mb-2 leading-6 text-[1.400em] sm:text-[1.459em] md:text-[1.487em] lg:text-[1.543em] xl:text-[1.600em] 2xl:text-[1.657em]">
      {title}
    </h2>
  );
};

export default TitleSection;
