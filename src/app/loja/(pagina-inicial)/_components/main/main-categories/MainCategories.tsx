"use client";
import WrapperHomeInput from "@/app/loja/_ui/WrapperHomeInput";
import { UserContext } from "@/contexts";
import { HomeContext } from "@/contexts/HomeContext";
import HomeTitleSubtitle from "@ui/HomeTitleSubtitle";
import Image from "next/image";
import { useContext, useState } from "react";
import MainCatsInput from "./Inputs/MainCatsInput";

const css = {
  container: `
    size-auto max-w-[648px] sm:px6 m-auto flex j-start flex-wrap gap-3 lg:flex-nowrap lg:h-[360px] lg:max-w-none
    xl:h-[390px] relative
  `,
  sectiooInEditMode: "pb-0 mb-0 m-auto max-w-210",
  wrapperEditMode: "p-6 pt-3 bg-white br-lg mb-10 shadow-lg-hover",
  wrapperImg: `
    w-[calc(50%-6px)] h-[66vw] max-w-[320px] max-h-[420px] bg-gray-100 flex items-end relative overflow-hidden
    br-lg lg:h-full
  `,
  img: "absolute inset-0 w-full h-full object-cover object-top scale-106 sepia-30",
  wrapperP: `h-20 w-full centralize relative bg-gradient-to-t from-stone-800/80 to-transparent 
    [text-shadow:_0_0_8px_rgb(0,_4px,_8px,_0.8)]`,
  p: "w-full px-8 text-white font-medium home-h1 sm:text-center leading-none",
};

const MainCategories = () => {
  const [sectionEditMode, setSectionEditMode] = useState<boolean>(false);
  const { mainCategories } = useContext(HomeContext);
  const { selectedGender, childCatSelected } = useContext(UserContext);

  const categories = childCatSelected
    ? []
    : selectedGender === "masculino"
    ? mainCategories.masculino
    : selectedGender === "feminino"
    ? mainCategories.feminino
    : [];

  if (categories && categories.length > 0) {
    return (
      <div className={`${sectionEditMode && css.sectiooInEditMode}`}>
        <HomeTitleSubtitle
          title="Categorias de Destaque"
          subtitle="Os mais procurados"
          sectionEditMode={sectionEditMode}
          setSectionEditMode={setSectionEditMode}
        ></HomeTitleSubtitle>

        {!sectionEditMode ? (
          <div className={`${css.container}`}>
            {categories.map((item) => (
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
          </div>
        ) : (
          <div className={`${css.wrapperEditMode}`}>
            <WrapperHomeInput
              title="Defina as principais categorias de cada gênero"
              setState={setSectionEditMode}
            >
              <MainCatsInput />
            </WrapperHomeInput>
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default MainCategories;
