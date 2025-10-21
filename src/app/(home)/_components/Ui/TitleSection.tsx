import React from "react";

const TitleSection = ({ title }: { title: string }): React.ReactElement => {
  return (
    <h2 className="text-stone-800 font-bold text-center leading-12 text-[1.550em] sm:text-[1.597em] md:text-[1.619em] lg:text-[1.665em] xl:text-[1.710em] 2xl:text-[1.755em]">
      {title}
    </h2>
  );
};

export default TitleSection;
