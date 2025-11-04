import React, { useContext, useState } from "react";
import { UserContext } from "@/contexts/UserContext";
import type { GenderKey } from "@/types/types";
import HomeTitleSubtitle from "@ui/HomeTitleSubtitle";
import ChildGenderButtons from "./components/ChildGenderButtons";

const userGenders = [
  { name: "masculino", icon: "man_2" },
  { name: "feminino", icon: "woman_2" },
  { name: "infantil", icon: "boy" },
];

const css = {
  container:
    "w-full h-auto max-w-220 m-auto centralize items-end flex-col gap-[6] sm:gap-3 sm:flex-row relative",
  wrapper:
    "h-max w-full px-3 sm:h-12 flex flex-col items-center j-between sm:flex-row gap-3",
  button: `w-full gap-2 !bg-gray-50 border border-white flex-auto justify-center! transition-transform duration-200 br-lg font-normal text-[1.06em] relative`,
  selected: "bg-white! border-gray-300!",
};

const UserGenderList = (): React.ReactElement => {
  const { selectedGender, setSelectedGender } = useContext(UserContext);
  const [fastReturn, setFastReturn] = useState<string | null>("");

  function handleSelectGender(gender: GenderKey) {
    setSelectedGender(gender);
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
                  handleSelectGender(item.name as GenderKey);
                }}
                className={`${css.button} ${
                  selectedGender === item.name && css.selected
                } ${fastReturn === item.name && "scale-106"}`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>{" "}
                {item.name}
              </button>
            );
          })}
          {selectedGender === "infantil" && <ChildGenderButtons />}
        </div>
      </div>
    </>
  );
};

export default UserGenderList;
