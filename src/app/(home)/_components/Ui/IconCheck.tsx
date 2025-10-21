import React from "react";
import { Check } from "lucide-react";

const css = {
  wrapperIcon:
    "min-w-7 h-7 rounded-lg inline-flex items-center justify-center bg-black/5",
};


const IconCheck = ({
  variation = "normalSection",
}: {
  variation?: string;
}): React.ReactElement => {

  return (
    <span
      className={`${css.wrapperIcon} ${
        variation == "mainSection" && "!bg-transparent"
      } `}
    >
      <Check
        size={18}
        color={variation == "mainSection"? "white" : "oklch(70.4% 0.14 182.503)"}
        strokeWidth={variation == "mainSection"? 2 : 2.3}
      />
    </span>
  );
};

export default IconCheck;
