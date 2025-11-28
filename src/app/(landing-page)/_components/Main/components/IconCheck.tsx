import React from "react";
import { Check } from "lucide-react";

const css = {
  wrapperIcon:
    "min-w-6 h-6 br-50 inline-flex items-center justify-center bg-[#E8F9EE] ml-px",
  fullPlanStyle: "min-w-5.5! h-5.5! bg-yellow-400!",
};

const IconCheck = ({
  section,
}: {
  section?: string;
}): React.ReactElement => {
  return (
    <span className={`${css.wrapperIcon} ${section === "plansSection" && css.fullPlanStyle}`}>
      <Check
        size={18}
        color={section === "plansSection" ? "#8F22C0" : "#22C35D"}
        strokeWidth={2.3}
      />
    </span>
  );
};

export default IconCheck;
