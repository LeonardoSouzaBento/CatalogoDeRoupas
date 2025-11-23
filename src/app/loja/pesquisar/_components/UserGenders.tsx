"use client";
import { UserContext } from "@/contexts";
import { BooleanSetter, Genders, StateSetter } from "@/types/types";
import { useContext } from "react";

const mainCss = {
  wrapper: `br-0 py-6`,
  wrapperGenders: "flex flex-wrap gap-4",
  selected: `bs bg-white hover:shadow-soft-soft hover:bg-white shadow-soft-small`,
  button: `h-10 max-[375px]:min-w-1/2 min-[375px]:min-w-none centralize bg-gray-50 hover:bg-gray-100 font-normal`,
};

const genders: Genders[] = ["masculino", "feminino"];

const UserGenders = () => {
  const {
    selectedGender,
    setSelectedGender,
    childCatSelected,
    setChildCatSelected,
  } = useContext(UserContext);

  return (
    <div className={`px-2`}>
      <div className={`${mainCss.wrapper}`}>
        <p className={`mb-4 text-[1.033em]`}>Gênero:</p>
        <div className={`${mainCss.wrapperGenders}`}>
          {genders.map((item) => (
            <GenderButton
              key={item}
              gender={item}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
              childCatSelected={childCatSelected}
              setChildCatSelected={setChildCatSelected}
            />
          ))}

          <ChildButtons
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            childCatSelected={childCatSelected}
            setChildCatSelected={setChildCatSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default UserGenders;

interface ButtonsProps {
  selectedGender: Genders;
  setSelectedGender: StateSetter<Genders>;
  childCatSelected: boolean;
  setChildCatSelected: BooleanSetter;
}

interface GenderButtonProps extends ButtonsProps {
  gender: Genders;
}

const GenderButton = ({
  gender,
  selectedGender,
  setSelectedGender,
  childCatSelected,
  setChildCatSelected,
}: GenderButtonProps) => {
  const selected = selectedGender === gender.toLowerCase() && !childCatSelected;

  return (
    <button
      onClick={() => {
        if (selectedGender !== gender) {
          setSelectedGender(gender);
        }
        if (childCatSelected) {
          setChildCatSelected(false);
        }
      }}
      className={`${mainCss.button} ${selected && mainCss.selected}`}
    >
      <p className={`small-p`}>{gender}</p>
    </button>
  );
};

const ChildButtons = ({
  selectedGender,
  setSelectedGender,
  childCatSelected,
  setChildCatSelected,
}: ButtonsProps) => {
  const femaleSelected = selectedGender === "feminino" && childCatSelected;
  const maleSelected = selectedGender === "masculino" && childCatSelected;

  function handleSelectGender(gender: Genders) {
    if (selectedGender !== gender) {
      setSelectedGender(gender);
    }
    if (!childCatSelected) {
      setChildCatSelected(true);
    }
  }

  return (
    <>
      <button
        className={`${mainCss.button} ${maleSelected && mainCss.selected} text-gray-800`}
        onClick={() => {
          handleSelectGender("masculino");
        }}
      >
         Infantil - masculino
      </button>
      <button
        className={`${mainCss.button} ${femaleSelected && mainCss.selected} text-gray-800`}
        onClick={() => {
          handleSelectGender("feminino");
        }}
      >
        Intantil - feminino
      </button>
    </>
  );
};

