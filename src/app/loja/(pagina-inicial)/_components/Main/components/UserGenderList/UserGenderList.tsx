import { UserContext } from "@/contexts/UserContext";
import type { homeUserGender } from "@/types/types";
import HomeTitleSubtitle from "@ui/HomeTitleSubtitle";
import React, { useContext, useState } from "react";
import ChildGenderButtons from "./components/ChildGenderButtons";
import { writeSpanStyle } from "@/functions/writeSpanStyle";

const userGenders = [
  { name: "masculino", icon: "man_2" },
  { name: "feminino", icon: "woman_2" },
];

const css = {
  container:
    "w-full h-auto max-w-220 m-auto centralize items-end flex-col gap-4 sm:flex-row relative",
  wrapper:
    "h-max w-full px-3 sm:h-12 flex flex-col items-center j-between sm:flex-row gap-4",
  button: `w-full gap-2 flex-auto justify-center border traking-wide
  transition-colors duration-200 br-lg relative font-normal uppercase small-p`,
  notSelected: "border-gray-100 hover:bg-gray-200/50 border-transparent ",
  selected: "bg-transparent bs shadow-xs hover:bg-white ",
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
      <HomeTitleSubtitle title="Selecione um gênero" section="genders" />
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
                  !childCatSelected ?
                  css.selected :
                  css.notSelected
                } ${fastReturn === item.name && "scale-106"}`}
              >
                <span className={`material-symbols-rounded span22`}>
                  {item.icon}
                </span>
                {item.name}
              </button>
            );
          })}
          {/* botão infantil */}
          <button
            onClick={() => {
              handleSelectGender("infantil");
            }}
            className={`${css.button} ${childCatSelected ? css.selected : css.notSelected} ${
              fastReturn === "infantil" && "scale-106"
            }`}
          >
            <span className="material-symbols-rounded">boy</span> infantil
          </button>
          {childCatSelected && <ChildGenderButtons />}
        </div>
      </div>
    </>
  );
};

export default UserGenderList;
