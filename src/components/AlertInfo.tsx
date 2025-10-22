import React from "react";

const css = {
  wrapper:
    "min-h-10 w-full p-4 mb-4 flex justify-start items-center gap-2 bg-neutral-100 rounded-sm",
  p: "small-p text-neutral-600",
  span: "text-neutral-500 !font-[300] text-[1.65em]",
};

const AlertInfo = ({text}:{text: string}) => {
  return (
    <div className={`${css.wrapper}`}>
      <span className={`${css.span} material-symbols-outlined line-span`}>info</span>
      <p className={`${css.p}`}>
        {text}
      </p>
    </div>
  );
};

export default AlertInfo;
