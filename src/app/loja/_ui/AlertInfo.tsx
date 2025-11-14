import React from "react";

const css = {
  wrapper:
    "min-h-10 w-full p-4 mb-5 flex justify-start items-center gap-2 bg-neutral-50 br-md",
  span: "br-50 text-rose-500 font-[400]! text-[1.36em]!",
};

const AlertInfo = ({ text, styles }: { text: string; styles?: string }) => {
  return (
    <div className={`${css.wrapper} ${styles}`}>
      <span className={`${css.span} material-symbols-outlined line-span`}>
        priority_high
      </span>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default AlertInfo;
