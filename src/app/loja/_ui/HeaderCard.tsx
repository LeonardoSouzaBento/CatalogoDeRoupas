import React from "react";

interface HeaderCardProps {
  title: string;
  icon: string;
}

const css = {
  wrapper: `w-full min-h-11 mb-5 flex items-center gap-2 border-b bs-color br-0`,
  wrapperIcon: "min-h-full w-6 mb-1 flex items-center justify-center",
  h2: `font-medium !mb-0 !text-neutral-800 !text-left text-[1.09em] capitalize` ,
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
