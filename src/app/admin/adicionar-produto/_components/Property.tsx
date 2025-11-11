import { iconMdStyles } from "@/app/lucideIconStyles";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const Property = ({
  name,
  optionsList,
}: {
  name: string;
  optionsList: string[];
}) => {
  const [seeOptions, setSeeOptions] = useState<boolean>(false);

  return (
    <div className="w-auto">
      <button
        onClick={() => {
          setSeeOptions((prev) => !prev);
        }}
        className={`flex justify-between items-center h-10 bg-button br-50 `}
      >
        {name}
        <div className={`wrapper-icon`}>
          {seeOptions ? (
            <ChevronDown {...iconMdStyles} />
          ) : (
            <ChevronUp {...iconMdStyles} />
          )}
        </div>
      </button>
      {seeOptions && (
        <div className="h-auto w-max flex flex-col absolute top-13 left-0">
          {optionsList.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Property;
