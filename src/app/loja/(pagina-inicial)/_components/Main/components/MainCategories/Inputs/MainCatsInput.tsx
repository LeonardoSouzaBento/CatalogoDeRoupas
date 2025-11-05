import React, { useState, useContext } from "react";
import { HomeContext } from "@/contexts/HomeContext";
import CategoryCardResume from "./CategoryCardResume";
import { iconMdStyles } from "@/app/lucideIconStyles";
import { Eye, EyeClosed, Plus } from "lucide-react";

const css = {
  wrapper: "pb-0",
  wrapperUserGenders: "flex flex-col mb-5 gap-3 sm:flex-row ",
  buttonGender: "button w-full sm:max-w-80 max-[350px]:!leading-4 ",
  wrapperCardCats:
    "flex flex-col flex-wrap gap-4 sm:flex-row sm:justify-center mb-5",
  wrapperImg: "h-40 w-30",
  img: "size-full object-cover",
  icon: iconMdStyles,
};

const MainCatsInput = (): React.ReactElement => {
  const { mainCategories } = useContext(HomeContext);
  const [selectedGender, setSelectedGender] = useState<string>("masculino");
  const selectedMainCategories =
    selectedGender === "masculino"
      ? mainCategories.masculino
      : mainCategories.feminino;
  const maleNoSelected = selectedGender !== "masculino" ? "!bg-gray-50" : "";
  const femaleNoSelected = selectedGender !== "feminino" ? "!bg-gray-50" : "";

  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.wrapperUserGenders} justify-start`}>
        <button
          className={`${css.buttonGender} ${maleNoSelected}`}
          onClick={() => {
            if (selectedGender !== "masculino") {
              setSelectedGender("masculino");
            }
          }}
        >
          {maleNoSelected ? (
            <EyeClosed {...iconMdStyles} />
          ) : (
            <Eye {...iconMdStyles} />
          )}
          Ver Categorias Masculinas
        </button>
        <button
          className={`${css.buttonGender} ${femaleNoSelected}`}
          onClick={() => {
            if (selectedGender !== "feminino") {
              setSelectedGender("feminino");
            }
          }}
        >
          {femaleNoSelected ? (
            <EyeClosed {...iconMdStyles} />
          ) : (
            <Eye {...iconMdStyles} />
          )}
          Ver Categorias Femininas
        </button>
      </div>
      <div className={`${css.wrapperCardCats}`}>
        {selectedMainCategories.map((category, index) => (
          <CategoryCardResume
            key={index}
            category={category}
          />
        ))}
      </div>
      <button >
        Adicionar Nova Categoria Principal
        <Plus {...iconMdStyles} />
      </button>
    </div>
  );
};

export default MainCatsInput;
