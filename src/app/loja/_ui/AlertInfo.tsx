import React from "react";

const css = {
  wrapper:
    "min-h-10 w-full p-3 mb-5 flex justify-start items-center gap-2 bg-neutral-50 br-sm",
  span: "br-50 text-neutral-500 font-[300]! text-[1.5em]!",
};

const AlertInfo = ({text}:{text: string}) => {
  return (
    <div className={`${css.wrapper}`}>
      <span className={`${css.span} material-symbols-outlined line-span`}>report</span>
      <p className="small-p text-neutral-700">
        {text}
      </p>
    </div>
  );
};

export default AlertInfo;
