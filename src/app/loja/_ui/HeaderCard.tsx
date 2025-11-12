"use client";
import React from "react";

interface HeaderCardProps {
  title: string;
  subtitle?: string;
  icon?: string;
  spanStyles?: string;
  titleStyles?: string;
  wrapperStyles?: string;
}

const css = {
  wrapper: `w-full min-h-10 flex flex-col i-start 
  mb-5 border-b bs-color br-0`,
  wrapperTitle: `min-h-10 flex i-center gap-2 `,
  title: `mt-[2px] font-semibold text-neutral-800 text-left text-[1.16em] tracking-normal`,
  wrapperIcon: "min-h-full w-6 flex items-center justify-center",
  icon: `text-[1.18em]!`,
};

const HeaderCard: React.FC<HeaderCardProps> = ({
  title,
  subtitle,
  icon,
  wrapperStyles = "",
  titleStyles = "",
  spanStyles = "",
}) => {
  return (
    <div className={`${css.wrapper} ${wrapperStyles}`}>
      <div className={`${css.wrapperTitle}`}>
        {icon && (
          <div className={`${css.wrapperIcon}`}>
            <span
              className={`material-symbols-outlined text-gray-800/90 ${
                spanStyles || css.icon
              }`}
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
