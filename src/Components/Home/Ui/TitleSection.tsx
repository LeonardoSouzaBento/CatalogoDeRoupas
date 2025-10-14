import React from "react";

const TitleSection = ({ title }: { title: string }): React.ReactElement => {
  return (
    <h2 className="text-violet-800 font-bold text-center mb-2 leading-9 text-[1.780em] sm:text-[1.844em] md:text-[1.876em] lg:text-[1.938em] xl:text-[2.000em] 2xl:text-[2.062em]">
      {title}
    </h2>
  );
};

export default TitleSection;
