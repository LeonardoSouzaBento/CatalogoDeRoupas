import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import { Genders } from "@/types/types";

const css = {
  wrapper: "w-max h-10 box-border flex items-center justify-between gap-3 z-2",
  buttons: "h-10 w-10 px-0 flex-center bg-gray-100 rounded-lg",
  selected: "font-extrabold bg-white bs-light shadow-sm",
};

const ChildGenderButtons = () => {
  const {
    selectedGender,
    setSelectedGender,
    childCatSelected,
    setChildCatSelected,
  } = useContext(UserContext);
  const [visible, setVisible] = useState<boolean>(false);

  const handleGenderClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    gender: Genders
  ) => {
    e.stopPropagation();
    if (selectedGender !== gender) setSelectedGender(gender);
    if (!childCatSelected) setChildCatSelected(true);
  };

  useEffect(() => {
    if (childCatSelected) {
      setTimeout(() => {
        setVisible(true);
      }, 250);
    }
  }, [childCatSelected]);

  return (
    <div className={`${css.wrapper} ${!visible && "hidden!"}`}>
      <button
        className={`${css.buttons} ${
          selectedGender === "masculino" && css.selected
        } `}
        onClick={(e) => handleGenderClick(e, "masculino" as Genders)}
      >
        M
      </button>
      <button
        className={`${css.buttons}  ${
          selectedGender === "feminino" && css.selected
        }`}
        onClick={(e) => handleGenderClick(e, "feminino" as Genders)}
      >
        F
      </button>
    </div>
  );
};

export default ChildGenderButtons;
