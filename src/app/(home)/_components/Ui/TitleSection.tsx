import React from "react";

const TitleSection = ({ title }: { title: string }): React.ReactElement => {
  return (
    <h2 className="text-stone-800 font-bold text-center leading-12 text-[1.518em] sm:text-[1.547em] md:text-[1.561em] lg:text-[1.590em] xl:text-[1.618em] 2xl:text-[1.646em]">
      {title}
    </h2>
  );
};

export default TitleSection;
