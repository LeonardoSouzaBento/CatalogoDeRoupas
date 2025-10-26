import React, { useState, useEffect, useContext } from "react";
import { HomeDataContext } from "@contexts/HomeDataContext";
import type { GenderKey } from "@/types/types";
import HomeTitleSubtitle from "@ui/HomeTitleSubtitle";
import { shopHomeSection, shopHomeWrapperSection } from "@/data/styles";
import ChildGenderButtons from "./components/ChildGenderButtons";
import GenderImage from "./components/GenderImage";

const css = {
  container:
    "w-full h-auto sm:h-[180px] max-w-220 m-auto centralize items-end flex-col gap-2 sm:flex-row relative",
  wrapper:
    "min-h-10 h-10 w-full sm:h-[156px] sm:w-1/3 bg-gray-100 flex items-end flex-auto crop relative trans rounded-sm",
  selectedWrapper: "h-[200px] sm:h-[180px] sm:w-[50%]",
  buttonGender:
    "h-full min-w-full w-full max-h-18 centralize relative bg-gradient-to-t from-black to-transparent text-white uppercase font-h !font-extralight leading-none text-[1.0676em] sm:text-[1.0788em] md:text-[1.0844em] lg:text-[1.0955em] xl:text-[1.1058em] 2xl:text-[1.116em] cursor-pointer",
  noSelectedWrapper: "bg-stone-800 sm:bg-transparent",
};

function getOrderClass(index: number, selectedIndex: number): string {
  if (index === selectedIndex) return "order-1";
  if (selectedIndex === 0) {
    return index === 1 ? "order-0" : "order-2";
  }
  if (selectedIndex === 1) {
    return index === 0 ? "order-0" : "order-2";
  }
  if (selectedIndex === 2) {
    return index === 0 ? "order-0" : "order-2";
  }
  return `order-${index}`;
}

const UserGenderList = (): React.ReactElement => {
  const { userCategories } = useContext(HomeDataContext);
  const { selectedGender, setSelectedGender } = useContext(HomeDataContext);
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  function handleSelectGender(gender: GenderKey) {
    setSelectedGender(gender);
  }

  useEffect(() => {
    if (selectedGender === "feminino") {
      setSelectedIndex(0);
    }
    if (selectedGender == "masculino") {
      setSelectedIndex(1);
    }
    if (selectedGender == "infantil") {
      setSelectedIndex(2);
    }
  }, [selectedGender]);

  return (
    <section
      className={`${shopHomeSection} bg-gradient-to-t from-neutral-100 to-white`}
    >
      <div className={`${shopHomeWrapperSection} !pt-[30px]`}>
        <HomeTitleSubtitle
          title="Selecione Um Gênero"
          subtitle="E veja as coleções relacionadas"
          genderSection={true}
        />
        <div className={css.container}>
          {userCategories.map((item, index) => {
            const orderClass = getOrderClass(index, selectedIndex);
            return (
              <div
                key={index}
                id={`${index}`}
                onClick={() => {
                  handleSelectGender(item.name);
                }}
                className={`${css.wrapper}  ${
                  selectedIndex === index
                    ? css.selectedWrapper
                    : css.noSelectedWrapper
                } ${orderClass}`}
              >
                <GenderImage
                  item={item}
                  index={index}
                  selectedGender={selectedGender}
                />
                <button
                  className={`${css.buttonGender} ${
                    item.name === selectedGender && "scale-107"
                  }`}
                >
                  {item.name}
                </button>

                {index == 2 && selectedGender == "infantil" && (
                  <ChildGenderButtons />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserGenderList;
