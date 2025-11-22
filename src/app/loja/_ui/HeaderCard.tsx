"use client";
import React from "react";

interface HeaderCardProps {
  title: string;
  subtitle?: string;
  icon?: string;
  iconStyles?: string;
  wrapperIconStyles?: string;
  wrapperTitleStyles?: string;
  titleStyles?: string;
  wrapperStyles?: string;
  collapsedDiv?: boolean;
}

//text-[1.1712em]

const css = {
  wrapper: `w-full min-h-10 flex flex-col i-start 
  mb-5 border-b bs-color br-0`,
  wrapperTitle: `min-h-10 flex i-center gap-1 `,
  title: `mt-[2px] font-semibold text-neutral-800 text-left p20 leading-6.5`,
  wrapperIcon: "min-h-full w-6 flex items-center justify-center",
  icon: `mr-2 text-gray-700 span22`,
};

const HeaderCard: React.FC<HeaderCardProps> = ({
  title,
  subtitle,
  wrapperIconStyles,
  icon,
  iconStyles,
  wrapperStyles = "",
  wrapperTitleStyles = "",
  titleStyles = "",
  collapsedDiv,
}) => {
  return (
    <div className={`${css.wrapper} ${wrapperStyles} ${collapsedDiv && "mb-0!"}`}>
      <div className={`${css.wrapperTitle} ${wrapperTitleStyles}`}>
        {icon && (
          <div className={`${css.wrapperIcon} ${wrapperIconStyles}`}>
            <span
              className={`material-symbols-outlined -ml-1.5 ${iconStyles || css.icon}`}
            >
              {icon}
            </span>
          </div>
        )}

        <h2 className={`${css.title} ${titleStyles}`}>{title}</h2>
      </div>
      {subtitle && <h3 className="text-gray-500 mb-3">{subtitle}</h3>}
    </div>
  );
};

export default HeaderCard;
