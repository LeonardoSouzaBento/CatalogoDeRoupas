import { Button, ButtonsWrapper } from "@/components/ui";
import { UserContext } from "@/contexts/userContext_";
import { homeUserGenders } from "@/data/UserData";
import { Gender } from "@/types";
import type { HomePageUserGender } from "@/types/types";
import React, { useContext, useEffect } from "react";

const css = {
  button: `gap-1 flex-auto transition-200 uppercase tracking-wide`,
};

function changeThemeClasses(gender: HomePageUserGender) {
  if (gender === "masculino") {
    document.body.classList.add("male-theme");
  }
  if (gender === "feminino") {
    document.body.classList.remove("male-theme");
  }
}

export const GenderSelector = (): React.ReactElement => {
  const {
    selectedGender,
    setSelectedGender,
    childCatSelected,
    setChildCatSelected,
  } = useContext(UserContext);

  useEffect(() => {
    changeThemeClasses(selectedGender as HomePageUserGender);
  }, [selectedGender]);

  return (
    <div>
      <p
        className={`max-w-none w-full text-center mb-2 uppercase
          large-text text-primary-900 tracking-wide`}
      >
        Selecione um gênero
      </p>
      <div className="w-full max-w-lg h-max mx-auto px-4 sm:px-6 sm:max-w-2xl relative">
        <ButtonsWrapper
          className={`grid grid-cols-1 gap-2 sm:gap-3
            sm:grid-cols-3`}
        >
          {homeUserGenders.map((name, index) => {
            const selected =
              selectedGender === name || (index === 2 && childCatSelected);
            return (
              <Button
                data-option
                key={name}
                variant={selected ? "default" : "secondary"}
                size={"sm"}
                data-selected={selected}
                onClick={() => {
                  if (index === 2) return setChildCatSelected((prev) => !prev);
                  setSelectedGender(name as Gender);
                }}
                className={`gap-1 flex-auto transition-200 uppercase tracking-wide w-full`}
              >
                {name}
              </Button>
            );
          })}
        </ButtonsWrapper>
      </div>
    </div>
  );
};
