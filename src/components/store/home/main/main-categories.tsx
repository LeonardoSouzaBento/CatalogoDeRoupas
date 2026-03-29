"use client";
import { InputWrapper, SectionHeader } from "@/components/store/home/ui/index";
import { UserContext } from "@/contexts/index";
import { HomeContext } from "@/contexts/homeContext_";
import { MainCategory } from "@/types/types";
import Image from "next/image";
import { useContext, useRef, useState } from "react";
import { MainCatsInput } from "./main-categories/_inputs/main-cats-input";
import { useMouseScrollX, useScrollGetVars } from "@/hooks";

const css = {
  container: `
    relative mx-auto pb-2 grid grid-cols-2 bp-430:grid-cols-2 gap-[clamp(16px,calc(13.416021px+0.689061vw),24px)]
    bp-840:max-w-none bp-840:flex bp-840:flex-nowrap bp-840:overflow-x-scroll
    bp-840:justify-center
  `,
  editMode: "pb-0 mb-0 m-auto max-w-210",
  wrapperEditMode: "p-6 pt-3 bg-light-bg rounded-md mb-10 shadow-lg",
  imageWrapper: `
    h-[66dvw] max-h-102 flex items-end relative overflow-hidden bg-theme-100 rounded-lg 
    bp-840:w-74 bp-840:min-w-74
  `,
  image:
    "absolute inset-0 w-full h-full object-cover object-top scale-106 sepia-10 contrast-96",
  nameWrapper: `w-full flex-center relative bg-linear-to-t from-black/80 to-transparent`,
  name: "w-full p-6 text-primary-50 sm:text-center leading-none",
};

export const MainCategories = ({ resizeCount }: { resizeCount: number }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { mainCategories } = useContext(HomeContext);
  const { selectedGender, childCatSelected } = useContext(UserContext);
  const parentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { parentWidth, scrollWidth } = useScrollGetVars({
    parentRef,
    containerRef,
    resizeCount,
    calcThumbWidth: false,
  });
  useMouseScrollX(containerRef, scrollWidth, parentWidth);

  const categories = childCatSelected
    ? []
    : selectedGender === "masculino"
      ? mainCategories.masculino
      : selectedGender === "feminino"
        ? mainCategories.feminino
        : [];

  if (categories && categories.length > 0) {
    return (
      <div>
        <div className={`${editMode && css.editMode}`}>
          <SectionHeader
            title="Categorias de Destaque"
            subtitle="Os mais procurados"
            editMode={editMode}
            setEditMode={setEditMode}
          />
          {!editMode ? (
            <div className={`${css.container}`} ref={parentRef}>
              {categories.map((item: MainCategory) => (
                <div
                  key={item.urlImg}
                  className={`${css.imageWrapper}`}
                  ref={containerRef}
                >
                  <Image
                    src={item.urlImg}
                    alt={item.alt}
                    className={`${css.image}`}
                    fill
                  />
                  <div className={`${css.nameWrapper}`}>
                    <h4 className={`${css.name}`}>{item.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`${css.wrapperEditMode}`}>
              <InputWrapper
                title="Defina as principais categorias de cada gênero"
                setState={setEditMode}
              >
                <MainCatsInput />
              </InputWrapper>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
