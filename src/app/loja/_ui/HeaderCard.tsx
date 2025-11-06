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
  wrapper: `w-full min-h-11 mb-1 flex flex-col i-start 
  mb-5 border-b bs-color br-0`,
  wrapperTitle: `min-h-11 flex i-center gap-2`,
  title: `font-medium !mb-0 !text-neutral-800 !text-left text-[1.09em] capitalize`,
  wrapperIcon: "min-h-full w-6 mb-1 flex items-center justify-center",
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
              className={`material-symbols-outlined text-neutral-800 ${spanStyles}`}
            >
              {icon}
            </span>
          </div>
        )}

        <h2 className={`${css.title} ${titleStyles && titleStyles}`}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <h3 className="text-gray-500 text-[0.96em] mb-3">{subtitle}</h3>
      )}
    </div>
  );
};

export default HeaderCard;
