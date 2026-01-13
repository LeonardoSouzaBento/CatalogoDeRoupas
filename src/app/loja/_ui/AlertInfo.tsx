import React from "react";

const css = {
  wrapper:
    "min-h-10 w-full p-4 mb-5 flex justify-start items-center gap-3 bg-gray-50/75 bs br-md",
  span: `material-symbols-rounded br-50 
  text-red-500 font-[400]! !`,
};

const AlertInfo = ({ text, styles }: { text: string; styles?: string }) => {
  return (
    <div className={`${css.wrapper} ${styles}`}>
      <div className={`size-max p-1 flex-center bg-red-400/10 br-50`}>
        <span className={`${css.span}`}>
          priority_high
        </span>
      </div>
      <p className="text-gray-700 5">{text}</p>
    </div>
  );
};

export default AlertInfo;
