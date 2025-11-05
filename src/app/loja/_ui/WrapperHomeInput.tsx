import React from "react";
import { BooleanSetter } from "@/types/types";
import ButtonClose from "./ButtonClose";

const css = {
  wrapper: "w-full bg-white",
  wrapperTitle:
    "min-h-13 min-w-full mb-5 flex justify-between items-center gap-2 border-b border-gray-200 rounded-none",
  h3: `font-medium text-[1.09em] leading-6`,
};

interface WrapperFormProps {
  title: string;
  setState: BooleanSetter;
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
        <ButtonClose setState={setState} />
      </div>
      {children}
    </div>
  );
};

export default WrapperHomeInput;
