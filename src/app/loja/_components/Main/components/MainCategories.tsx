import React, { useState, useContext } from "react";
import WrapperForm from "./WrapperForm";
import MainCatsInput from "../../InputsForEdit/MainCatsInput/MainCatsInput";
import { HomeDataContext } from "@contexts/HomeDataContext";
import HomeTitleSubtitle from "@/app/loja/_ui/HomeTitleSubtitle";
import Image from "next/image";
import { shopHomeSection, shopHomeWrapperSection } from "@/data/styles";

const css = {
  sectionEditMode: "pb-0 mb-0 m-auto max-w-210",
  wrapperEditMode: "bg-white p-4 mb-10 rounded-md shadow-md hover:shadow-lg",
  container: `
    size-auto max-w-[648px] sm:px6 m-auto flex j-start flex-wrap gap-2 lg:flex-nowrap lg:h-[360px] lg:max-w-none
    xl:h-[390px]
  `,
  wrapperImg: `
    w-[calc(50%-4px)] h-[66vw] max-w-[320px] max-h-[420px] bg-gray-100 flex items-end relative overflow-hidden
    br-sm lg:h-full
  `,
  img: "absolute inset-0 w-full h-full object-cover object-top scale-106 sepia-30",
  wrapperP:
    "h-auto w-full py-5 sm:py-6 centralize relative bg-gradient-to-t from-black to-transparent",
  p: "w-full px-8 text-white font-h font-normal h1-sizes sm:text-center leading-none",
};

const MainCategories = (): React.ReactElement | undefined | null => {
  const [seeEditSection, setSeeEditSection] = useState<boolean>(false);
  const { mainCategories, selectedGender } = useContext(HomeDataContext);

  // mapeia o gênero selecionado para a chave do objeto mainCategories
  const associations: Record<string, keyof typeof mainCategories> = {
    masculino: "male",
    feminino: "female",
  };

  // pega o array correto com base no gênero
  const selectedMainCategories = mainCategories[associations[selectedGender]];

  if (!selectedMainCategories) return null;

  return (
    <section className={`${shopHomeSection}`}>
      <div
        className={`${shopHomeWrapperSection} ${seeEditSection && css.sectionEditMode}`}
      >
        <HomeTitleSubtitle
          title="Categorias de Destaque"
          subtitle="Os mais procurados"
        />
        {!seeEditSection && (
          <div className={`${css.container}`}>
            {selectedMainCategories.map((item, index) => (
              <div key={index} className={`${css.wrapperImg}`}>
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
          </div>
        )}
        {seeEditSection && (
          <div className={`${css.wrapperEditMode}`}>
            <WrapperForm
              title="Defina as principais categorias de cada gênero"
              seeButtonClose
              setState={setSeeEditSection}
            >
              <MainCatsInput />
            </WrapperForm>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainCategories;
