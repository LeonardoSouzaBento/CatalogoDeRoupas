import React, { useState, useEffect, useContext } from "react";
import { HomeDataContext } from "@src/contexts/HomeDataContext";
import type { GenderKey } from "@src/types/types";

const css = {
  section: "title pt-6 pb-10",
  h1: "text-neutral-800",
  h2: "subtitle",
  container:
    "w-full h-82 sm:h-[180px] max-w-220 m-auto centralize items-end flex-col gap-3 sm:gap-2 sm:flex-row relative",
  wrapper:
    "min-h-13 h-13 w-full sm:h-[156px] sm:w-1/3 bg-gray-100 flex items-end flex-auto crop relative trans rounded-sm",
  selectedWrapper: "h-[200px] sm:h-[180px] sm:w-[50%]",
  wrapperImg: "size-full overflow-visible ",
  img: "size-auto absolute object-top object-cover scale-136 -translate-y-[8vw] sm:-translate-y-0 transition-transform duration-600 grayscale sepia-40 opacity-74 mix-blend-multiply",
  selectedImg:
    "-translate-y-[14vw] sm:-translate-y-[6vw] md:-translate-y-[3vw] opacity-100 mix-blend-normal grayscale-0",
  buttonGender:
    "h-full min-w-full w-full max-h-18 centralize relative bg-gradient-to-t from-black to-transparent",
  noSelectedWrapper: "bg-stone-800 sm:bg-transparent",
  p: "text-white font-h uppercase font-light leading-none text-[1.148em] sm:text-[1.160em] md:text-[1.166em] lg:text-[1.178em] xl:text-[1.189em] 2xl:text-[1.200em] cursor-pointer",
  divButtonsMF:
    "min-w-10 h-full px-3 box-content absolute bottom-0 right-0 flex flex-col justify-center gap-3",
  buttonsMF: "h-10 min-w-full bg-stone-800 text-white rounded-sm",
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

const UserCategoryList = (): React.ReactElement => {
  const { userCategories, selectedChildGender, setSelectedChildGender } =
    useContext(HomeDataContext);
  const { selectedGender, setSelectedGender } = useContext(HomeDataContext);
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const childSex = selectedChildGender;

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
    <section className={css.section}>
      <h1 className={css.h1}>Selecione Uma Categoria</h1>
      <h2 className={`${css.h2}`}>E explore as principais coleções</h2>
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
              <div className={`${css.wrapperImg}`}>
                <img
                  id={`${index}`}
                  src={`${item.img}`}
                  alt={`Categoria ${index + 1}`}
                  className={`${css.img} ${
                    selectedGender === item.name && css.selectedImg
                  }`}
                />
              </div>

              <button className={`${css.buttonGender}`}>
                <p className={`${css.p}`}>
                  {Array.isArray(item.name) ? item.name[0] : item.name}
                </p>
              </button>

              {index == 2 && selectedGender == "infantil" && (
                <div className={`${css.divButtonsMF}`}>
                  <button
                    className={`${css.buttonsMF} ${
                      childSex === "feminino" && "border !border-neutral-400"
                    } `}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedChildGender("feminino");
                    }}
                  >
                    M
                  </button>
                  <button
                    className={`${css.buttonsMF}  ${
                      childSex === "masculino" && "border !border-neutral-400"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedChildGender("masculino");
                    }}
                  >
                    F
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UserCategoryList;
