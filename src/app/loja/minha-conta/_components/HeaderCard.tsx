import React from "react";

interface HeaderCardProps {
  title: string;
  icon: string;
}

const css = {
  wrapper: `min-h-10 h-10 mb-4 flex items-center gap-2 border-b border-color br-0`,
  wrapperIcon: "min-h-full w-6 mb-1 flex items-center justify-center",
  h2: `font-h font-medium !mb-0 !text-neutral-800 !text-left text-[1.130em] sm:text-[1.134em] md:text-[1.135em] lg:text-[1.139em] xl:text-[1.142em] 2xl:text-[1.145em]` ,
};

const HeaderCard: React.FC<HeaderCardProps> = ({ title, icon }) => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.wrapperIcon}`}>
        <span className="material-symbols-outlined text-neutral-800">{icon}</span>
      </div>
      <h2 className={`${css.h2}`}>{title}</h2>
    </div>
  );
};

export default HeaderCard;
