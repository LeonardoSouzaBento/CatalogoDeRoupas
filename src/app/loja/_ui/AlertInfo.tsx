import React from "react";

const css = {
  wrapper:
    "min-h-10 w-full p-4 mb-4 flex justify-start items-center gap-3 bg-neutral-50 br-xs",
  span: "br-50 text-neutral-500 !font-[300] text-[1.65em]",
};

const AlertInfo = ({text}:{text: string}) => {
  return (
    <div className={`${css.wrapper}`}>
      <span className={`${css.span} material-symbols-outlined line-span`}>info</span>
      <p className="small-p text-neutral-600">
        {text}
      </p>
    </div>
  );
};

export default AlertInfo;
