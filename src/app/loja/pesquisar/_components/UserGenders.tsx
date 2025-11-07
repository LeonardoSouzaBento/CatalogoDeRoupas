"use client";
import React, { useContext } from "react";
import { userGenders } from "@/data/UserData";
import { UserContext } from "@/contexts";
import { GenderKey, StateSetter } from "@/types/types";

const mainCss = {
  wrapper: `br-0 py-6`,
  wrapperGenders: "flex gap-3 max-[410px]:justify-between",
  selected: `border bs-light-color bg-white hover:shadow-soft-soft hover:bg-white shadow-soft-small`,
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
    button: `h-10 w-1/3 max-[410px]:px-0 min-[410px]:max-w-max centralize 
    bg-gray-50 hover:bg-gray-100 font-normal`,
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
    wrapper: `mb-6 flex i-center gap-3`,
    button: `h-10 w-1/3 max-[410px]:px-0 min-[410px]:max-w-max centralize bg-gray-50 font-normal`,
  };

  return (
      <div className={`${css.wrapper}`}>
        <p className="mr-3">Sexo:</p>
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
  );
};
