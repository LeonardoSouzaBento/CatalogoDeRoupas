"use client";
import { InputWrapper, SectionHeader } from "@/components/store/home/ui/index";
import { useUserContext, useHomeContext } from "@/contexts/index";
import { MainCategory } from "@/types/types";
import Image from "next/image";
import { useRef, useState } from "react";
import { MainCatsInput } from "./main-categories/_inputs/main-cats-input";
import { useMouseScrollX } from "@/hooks";

const css = {
  wrapper: `
    relative max-w-full mx-auto grid overflow-x-scroll grid-cols-[max-content_max-content] gap-[clamp(12px,calc(8.8px+1vw),24px)]
    bp-840:flex`,
  editMode: "pb-0 mb-0 m-auto max-w-210",
  inputwArea: "p-6 pt-3 bg-light-bg rounded-md mb-10 shadow-lg",
  imageWrapper: `
    aspect-3/4 min-w-50 w-50 flex items-end relative overflow-hidden 
    bg-border/50 rounded-lg border bp-840:min-w-80
  `,
  image:
    "absolute inset-0 w-full h-full object-cover object-top scale-106 sepia-10 contrast-96",
  nameWrapper: `w-full flex-center relative bg-linear-to-t from-black/80 to-transparent`,
  name: "w-full p-6 text-primary-50 text-center leading-none",
};

export const MainCategories = ({ resizeCount }: { resizeCount: number }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { mainCategories } = useHomeContext();
  const { selectedGender, childCatSelected } = useUserContext();
  const parentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useMouseScrollX({
    parentRef,
    containerRef,
    resizeCount,
  });

  const categories = childCatSelected
    ? []
    : selectedGender === "masculino"
      ? mainCategories.masculino
      : selectedGender === "feminino"
        ? mainCategories.feminino
        : [];

  if (categories && categories.length > 0) {
    return (
      <div ref={parentRef} className={`w-full ${editMode && css.editMode}`}>
        <SectionHeader
          title="Categorias de Destaque"
          subtitle="Os mais procurados"
          editMode={editMode}
          setEditMode={setEditMode}
        />
        {!editMode ? (
          <div ref={containerRef} className={`${css.wrapper}`}>
            {categories.map((item: MainCategory) => (
              <div key={item.urlImg} className={`${css.imageWrapper}`}>
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
          <div className={`${css.inputwArea}`}>
            <InputWrapper
              title="Defina as principais categorias de cada gênero"
              setState={setEditMode}
            >
              <MainCatsInput />
            </InputWrapper>
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
};
