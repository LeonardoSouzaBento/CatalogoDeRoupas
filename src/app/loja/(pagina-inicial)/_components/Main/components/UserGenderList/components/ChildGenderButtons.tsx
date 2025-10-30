import { HomeContext } from "@/contexts/HomeContext";
import React, {useContext} from "react";

const css = {
  divButtonsMF:
    "min-w-10 h-full px-3 box-content absolute bottom-0 right-0 flex flex-col justify-center gap-3",
  buttonsMF:
    "h-10 min-w-full bg-stone-800 text-white rounded-sm font-extralight",
};

const ChildGenderButtons = () => {
  const { selectedChildGender, setSelectedChildGender } =
    useContext(HomeContext);

  return (
    <div className={`${css.divButtonsMF}`}>
      <button
        className={`${css.buttonsMF} ${
          selectedChildGender === "feminino" && "border !border-neutral-400"
        } `}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedChildGender("feminino");
        }}
      >
        M
      </button>
      <button
        className={`${css.buttonsMF}  ${
          selectedChildGender === "masculino" && "border !border-neutral-400"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedChildGender("masculino");
        }}
      >
        F
      </button>
    </div>
  );
};

export default ChildGenderButtons;
