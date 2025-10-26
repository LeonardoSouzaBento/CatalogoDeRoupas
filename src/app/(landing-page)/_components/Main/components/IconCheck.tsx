import React from "react";
import { Check } from "lucide-react";

const css = {
  wrapperIcon:
    "min-w-7 h-7 rounded-lg inline-flex items-center justify-center bg-[#E8F9EE]",
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
        color="#22C35D"
        strokeWidth={variation == "mainSection"? 2 : 2.3}
      />
    </span>
  );
};

export default IconCheck;
