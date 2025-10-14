import React from "react";
import { Check } from "lucide-react";

const css = {
  wrapperIcon:
    "min-w-6 h-6 rounded-sm inline-flex items-center justify-center bg-teal-500",
  iconCheck: { size: 18 },
};

const cssPlansSection = "!rounded-xl mt-[6px] !bg-gray-200";

const IconCheck = ({
  variation = "normalSection",
}: {
  variation?: string;
}): React.ReactElement => {
  let color;

  if (variation === "mainSection") {
    color = "#BFBD0D";
  } else if (variation === "plansSection") {
    color = "oklch(38% 0.189 293.745)";
  } else {
    color = "oklch(43.2% 0.232 292.759)";
  }

  return (
    <span
      className={`${css.wrapperIcon} ${
        variation == "mainSection" && "!bg-white/20"
      } ${variation === "plansSection" && cssPlansSection}`}
    >
      <Check
        {...css.iconCheck}
        color={color}
        strokeWidth={variation === "plansSection" ? 2.2 : 2.8}
      />
    </span>
  );
};

export default IconCheck;
