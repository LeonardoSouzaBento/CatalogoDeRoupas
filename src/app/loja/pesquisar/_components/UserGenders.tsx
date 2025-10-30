"use client";
import React, { useContext } from "react";
import { userGenders } from "@/data/UserData";
import { UserContext } from "@/contexts";
import { GenderKey, StateSetter } from "@/types/types";

const mainCss = {
  wrapper: `br-0 py-6`,
  wrapperGenders: "flex gap-3 j-between",
  selected: `border bs-light-color bg-white shadow-soft-small`,
};

const UserGenders = () => {
  const { selectedGender, setSelectedGender } = useContext(UserContext);

  return (
    <div className="px-2">
      <div className={`${mainCss.wrapper}`}>
        <p className="mb-4 text-[1.033em]">Gênero:</p>
        <div className={`${mainCss.wrapperGenders}`}>
          {userGenders.map((gender) => (
            <GenderButton
              key={gender}
              gender={gender}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
          ))}
        </div>
      </div>
      {selectedGender === "infantil" && <ChildButtons />}
    </div>
  );
};

export default UserGenders;

const GenderButton = ({
  gender,
  selectedGender,
  setSelectedGender,
}: {
  gender: GenderKey;
  selectedGender: GenderKey;
  setSelectedGender: StateSetter<GenderKey>;
}) => {
  const selected = selectedGender === gender.toLowerCase();
  const css = {
    button: `h-10 w-1/3 centralize bg-gray-50 px-0 font-normal`,
  };

  return (
    <button
      onClick={() => {
        setSelectedGender(gender);
      }}
      className={`${css.button} ${selected && mainCss.selected}`}
    >
      <p className="small-p">{gender}</p>
    </button>
  );
};

const ChildButtons = () => {
  const { selectedChildGender, setSelectedChildGender } =
    useContext(UserContext);
  const femaleSelected = selectedChildGender === "feminino";
  const maleSelected = selectedChildGender === "masculino";

  const css = {
    wrapper: `flex flex-col pb-6`,
    wrapperButtons: `flex gap-3`,
    button: `h-10 w-1/3 centralize bg-gray-50 px-0 font-normal`,
  };

  return (
    <div className={`${css.wrapper} `}>
      <p className="mb-[18px]">Sexo:</p>
      <div className={`${css.wrapperButtons}`}>
        <button
          className={`${css.button} ${maleSelected && mainCss.selected}`}
          onClick={() => {
            setSelectedChildGender("masculino");
          }}
        >
          masculino
        </button>
        <button
          className={`${css.button} ${femaleSelected && mainCss.selected}`}
          onClick={() => {
            setSelectedChildGender("feminino");
          }}
        >
          feminino
        </button>
      </div>
    </div>
  );
};
