"use client";
import React, { useState, useContext } from "react";
import { HomeDataContext } from "@contexts/HomeDataContext";
import WrapperHomeInput from "@/app/loja/_ui/WrapperHomeInput";
import MainCatsInput from "./Inputs/MainCatsInput";
import HomeTitleSubtitle from "@ui/HomeTitleSubtitle";
import Image from "next/image";
import ButtonSeeEditMode from "@/app/loja/_ui/ButtonSeeEditMode";

const css = {
  sectionEditMode: "pb-0 mb-0 m-auto max-w-210",
  wrapperForEditMode: "bg-white p-4 mb-10 rounded-md shadow-md hover:shadow-lg",
  container: `
    size-auto max-w-[648px] sm:px6 m-auto flex j-start flex-wrap gap-3 lg:flex-nowrap lg:h-[360px] lg:max-w-none
    xl:h-[390px]
  `,
  wrapperImg: `
    w-[calc(50%-6px)] h-[66vw] max-w-[320px] max-h-[420px] bg-gray-100 flex items-end relative overflow-hidden
    br-lg lg:h-full
  `,
  img: "absolute inset-0 w-full h-full object-cover object-top scale-106 sepia-30",
  wrapperP:
    "h-auto w-full py-5 sm:py-6 centralize relative bg-gradient-to-t from-neutral-800 to-transparent",
  p: "w-full px-8 text-white font-medium home-h1 sm:text-center leading-none",
};

const MainCategories = (): React.ReactElement | undefined | null => {
  const { editMode } = useContext(HomeDataContext);
  const [seeEditSection, setSeeEditSection] = useState<boolean>(false);
  const { mainCategories, selectedGender } = useContext(HomeDataContext);

  // mapeia o gênero selecionado para a chave do objeto mainCategories
  const associations: Record<string, keyof typeof mainCategories> = {
    masculino: "male",
    feminino: "female",
  };

  // pega o array correto com base no gênero
  const selectedMainCategories = mainCategories[associations[selectedGender]];

  return (
    <div className={`${seeEditSection && css.sectionEditMode}`}>
      <HomeTitleSubtitle
        title="Categorias de Destaque"
        subtitle="Os mais procurados"
      />
      {!seeEditSection ? (
        <div className={`${css.container}`}>
          {selectedMainCategories.map((item) => (
            <div key={item.urlImg} className={`${css.wrapperImg}`}>
              <Image
                src={item.urlImg}
                alt={item.alt}
                className={`${css.img}`}
                fill={true}
              />
              <div className={`${css.wrapperP}`}>
                <p className={`${css.p}`}>{item.name}</p>
              </div>
            </div>
          ))}
          {editMode && <ButtonSeeEditMode setState={setSeeEditSection} />}
        </div>
      ) : (
        <div className={`${css.wrapperForEditMode}`}>
          <WrapperHomeInput
            title="Defina as principais categorias de cada gênero"
            setState={setSeeEditSection}
          >
            <MainCatsInput />
          </WrapperHomeInput>
        </div>
      )}
    </div>
  );
};

export default MainCategories;
