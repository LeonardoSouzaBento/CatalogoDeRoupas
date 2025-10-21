import React, { useState, useContext } from "react";
import { HomeDataContext } from "@src/contexts/HomeDataContext";
import CategoryCardResume from "./CategoryCardResume";
import { iconMdStyles } from "@src/data/styles";
import { Eye, EyeClosed, Plus } from "lucide-react";

const css = {
  wrapper: "py-2 pb-0",
  wrapperUserGenders: "flex flex-col pb-3 gap-3 sm:flex-row ",
  buttonGender: "base-button-light w-full sm:max-w-80 max-[350px]:!leading-4 ",
  wrapperPInfo:
    "min-h-10 w-full p-3 mb-4 flex justify-start items-center gap-2 bg-gray-100 rounded-sm",
  infoP: "small-p",
  spanInfo: "text-gray-600 !font-[350]",
  wrapperCardCats:
    "flex flex-col flex-wrap gap-4 sm:flex-row sm:justify-center sm:gap-2 mb-4",
  wrapperImg: "h-40 w-30",
  img: "size-full object-cover",
  p: "",
  input: "",
  button: "base-button-light ",
  icon: iconMdStyles,
};

const MainCatsInput = (): React.ReactElement => {
  const { mainCategories } = useContext(HomeDataContext);
  const [selectedGender, setSelectedGender] = useState<string>("masculino");
  const selectedMainCategories =
    selectedGender === "masculino"
      ? mainCategories.male
      : mainCategories.female;
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
      <div className={`${css.wrapperPInfo}`}>
        <span className={`${css.spanInfo} material-symbols-outlined`}>
          info
        </span>
        <p className={`${css.infoP}`}>
          Se você desejar adicionar categorias de destaque ao genero infantil,
          entre em contato conosco.
        </p>
      </div>
      <div className={`${css.wrapperCardCats}`}>
        {selectedMainCategories.map((category, index) => (
          <CategoryCardResume
            key={index}
            category={category}
          />
        ))}
      </div>
      <button className={`${css.button}`}>
        Adicionar Nova Categoria Principal
        <Plus {...iconMdStyles} />
      </button>
    </div>
  );
};

export default MainCatsInput;
