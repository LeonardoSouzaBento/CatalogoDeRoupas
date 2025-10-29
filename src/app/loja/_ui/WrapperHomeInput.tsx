import React from "react";
import { X } from "lucide-react";
import { BoolSetter } from "@/types/types";
import { iconMdStyles } from "@/app/lucideIconStyles";

const css = {
  wrapper: "w-full bg-white",
  wrapperTitle:
    "min-h-11 min-w-full mb-[19] flex justify-between items-center gap-2 border-b border-gray-200 rounded-none",
  button:
    "close-button absolute top-[10.5px] right-[10.5px]",
  h3: `font-medium text-[1.066em] leading-5`,
};

interface WrapperFormProps {
  title: string;
  setState: BoolSetter;
  children: React.ReactElement;
}

const WrapperHomeInput = ({
  title,
  children,
  setState,
}: WrapperFormProps): React.ReactElement => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.wrapperTitle}`}>
        <p className={`${css.h3}`}>{title}</p>

        <button
          className={`${css.button}`}
          onClick={() => {
            setState(false);
          }}
        >
          <X {...iconMdStyles} strokeWidth={1.9}/>
        </button>
      </div>
      {children}
    </div>
  );
};

export default WrapperHomeInput;
