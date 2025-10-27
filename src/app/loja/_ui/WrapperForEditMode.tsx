import React from "react";
import { X } from "lucide-react";

const css = {
  wrapper: "w-full bg-white",
  wrapperTitle:
    "min-h-10 min-w-full mb-4 flex justify-between items-center gap-2 border-b border-gray-300 rounded-none",
  button: "h-9 min-w-9 br-xs centralize bg-bt absolute top-[10.5px] right-[10.5px]",
  icon: { strokeWidth: 2.3, size: 20 },
  h3: `font-medium text-[1.090em] sm:text-[1.099em] md:text-[1.103em] 
  lg:text-[1.112em] xl:text-[1.120em] 2xl:text-[1.128em] leading-5`, 
};

interface WrapperFormProps {
  title: string;
  seeButtonClose: boolean;
  children: React.ReactElement;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const WrapperForEditMode = ({
  title,
  seeButtonClose = true,
  children,
  setState,
}: WrapperFormProps): React.ReactElement => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.wrapperTitle}`}>
        <p className={`${css.h3}`}>{title}</p>
        {seeButtonClose && (
          <button
            className={`${css.button}`}
            onClick={() => {
              setState(false);
            }}
          >
            <X {...css.icon} />
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default WrapperForEditMode;
