"use client";
import React, { useContext } from "react";
import { HomeDataContext } from "@/contexts/HomeDataContext";
import { userGenders } from "@/data/UsersData";

const css = {
  wrapper: `mb-5 br-0`,
  wrapperGenders: "flex gap-3 j-between",
};

const UserGenders = () => {
  return (
    <div className={`${css.wrapper}`}>
      <p className="mb-3">Gênero:</p>

      <div className={`${css.wrapperGenders}`}>
        {userGenders.map((gender) => (
          <GenderButton key={gender} gender={gender} />
        ))}
      </div>
    </div>
  );
};

export default UserGenders;

const GenderButton = ({ gender }: { gender: string }) => {
  const css = {
    wrapper: `h-9 w-1/3 centralize border border-color`,
    selected: `bg-button`,
  };

  const { selectedGender } = useContext(HomeDataContext);
  const selected = selectedGender === gender.toLowerCase();

  return (
    <div className={`${css.wrapper} ${selected && css.selected}`}>
      <p className="small-p">{gender}</p>
    </div>
  );
};
