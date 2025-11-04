import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/UserContext";

const css = {
  wrapper:
    "w-max h-10 box-border flex items-center justify-between gap-3 z-2",
  buttons: "h-10 w-10 px-0 centralize bg-gray-100 rounded-md",
  selected: "font-extrabold bg-white bs",
};

const ChildGenderButtons = () => {
  const { selectedGender, selectedChildGender, setSelectedChildGender } =
    useContext(UserContext);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (selectedGender === "infantil") {
      setTimeout(() => {
        setVisible(true);
      }, 250);
    }
  }, [selectedGender]);

  return (
    <div className={`${css.wrapper} ${!visible && "hidden!"}`}>
      <button
        className={`${css.buttons} ${
          selectedChildGender === "feminino" && css.selected
        } `}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedChildGender("feminino");
        }}
      >
        M
      </button>
      <button
        className={`${css.buttons}  ${
          selectedChildGender === "masculino" && css.selected
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
