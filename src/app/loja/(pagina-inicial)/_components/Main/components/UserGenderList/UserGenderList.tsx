import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import type { homeUserGender } from "@/types/types";
import HomeTitleSubtitle from "@ui/HomeTitleSubtitle";
import ChildGenderButtons from "./components/ChildGenderButtons";

const userGenders = [
  { name: "masculino", icon: "man_2" },
  { name: "feminino", icon: "woman_2" },
];

const css = {
  container:
    "w-full h-auto max-w-220 m-auto centralize items-end flex-col gap-[6] sm:gap-3 sm:flex-row relative",
  wrapper:
    "h-max w-full px-3 sm:h-12 flex flex-col items-center j-between sm:flex-row gap-3",
  button: `w-full gap-2 !bg-gray-50 flex-auto justify-center! transition-colors duration-200 
  br-lg font-normal text-[1.06em] relative hover:bg-gray-200/50!`,
  selected: "bg-white! shadow-soft border border-gray-200/70 hover:bg-white!",
};

const UserGenderList = (): React.ReactElement => {
  const {
    selectedGender,
    setSelectedGender,
    childCatSelected,
    setChildCatSelected,
  } = useContext(UserContext);
  const [fastReturn, setFastReturn] = useState<string | null>("");

  function handleSelectGender(gender: homeUserGender) {
    if (gender == "masculino" || gender === "feminino") {
      setChildCatSelected(false);
      setSelectedGender(gender);
    }
    if (gender === "infantil") {
      setChildCatSelected(true);
    }

    setFastReturn(gender);
    setTimeout(() => {
      setFastReturn(null);
    }, 300);
  }

  return (
    <>
      <HomeTitleSubtitle
        title="Selecione Um Gênero"
        subtitle="E veja as coleções relacionadas"
        section="genders"
      />
      <div className={css.container}>
        <div className={`${css.wrapper}`}>
          {userGenders.map((item) => {
            return (
              <button
                key={item.name}
                onClick={() => {
                  handleSelectGender(item.name as homeUserGender);
                }}
                className={`${css.button} ${
                  selectedGender === item.name &&
                  !childCatSelected &&
                  css.selected
                } ${fastReturn === item.name && "scale-106"}`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>{" "}
                {item.name}
              </button>
            );
          })}
          {/* botão infantil */}
          <button
            onClick={() => {
              handleSelectGender("infantil");
            }}
            className={`${css.button} ${childCatSelected && css.selected} ${
              fastReturn === "infantil" && "scale-106"
            }`}
          >
            <span className="material-symbols-outlined">boy</span> infantil
          </button>
          {childCatSelected && <ChildGenderButtons />}
        </div>
      </div>
    </>
  );
};

export default UserGenderList;
