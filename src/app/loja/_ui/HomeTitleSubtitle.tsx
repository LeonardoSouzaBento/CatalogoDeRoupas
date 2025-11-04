import { BooleanSetter } from "@/types/types";
import React, { useContext } from "react";
import ButtonSeeEditMode from "./ButtonSeeEditMode";
import { HomeContext } from "@/contexts";
import { PenOff, X } from "lucide-react";
import { iconMdStyles } from "@/app/lucideIconStyles";

interface HomeTitleSubtitleProps {
  title: string;
  subtitle?: string;
  section?: string;
  sectionEditMode?: boolean;
  setSectionEditMode?: BooleanSetter;
}

const css = {
  h1: `font-bold capitalize leading-10 tracking-normal text-center text-[1.240em] sm:text-[1.258em] md:text-[1.266em] lg:text-[1.283em] xl:text-[1.300em] 2xl:text-[1.317em]`,
  h1SelectGender:
    "font-medium text-center text-[1.148em] sm:text-[1.160em] md:text-[1.166em] lg:text-[1.178em] xl:text-[1.189em] 2xl:text-[1.200em]",
  h2: `w-full mb-6 font-light text-center text-neutral-700 text-[1.065em] sm:text-[1.081em] md:text-[1.089em] lg:text-[1.104em] xl:text-[1.120em] 2xl:text-[1.136em]`,
};

const HomeTitleSubtitle = ({
  title,
  subtitle,
  section,
  sectionEditMode,
  setSectionEditMode = () => {},
}: HomeTitleSubtitleProps) => {
  const { homeEditMode } = useContext(HomeContext);
  const seeButtonEdit =
    homeEditMode && !sectionEditMode && section !== "genders";
  const seeButtonCloseEdit =
    sectionEditMode && homeEditMode && section !== "genders";

  return (
    <div>
      <div className="w-full px-3 flex j-center i-center gap-3">
        <div className="flex flex-col size-auto">
          <h1 className={section == "genders" ? css.h1SelectGender : css.h1}>
            {title}
          </h1>
          {subtitle && (
            <h2
              className={`${css.h2} ${
                section == "clothes" && "mb-3!"
              }`}
            >
              {subtitle}
            </h2>
          )}
        </div>
      </div>
      {seeButtonEdit && (
        <ButtonSeeEditMode
          setState={setSectionEditMode}
          positionStyles="relative"
          variantion="title"
          section={section}
        />
      )}
      {seeButtonCloseEdit && (
        <button
          className={`${"min-w-52 centralize m-auto mb-5 br-lg bg-white shadow-soft hover:shadow-soft-hover"} ${section === "clothes" && "mb-2!"}`}
          onClick={() => {
            setSectionEditMode(false);
          }}
        >
          Fechar edição
          <PenOff {...iconMdStyles} strokeWidth={2.8}/>
        </button>
      )}
    </div>
  );
};

export default HomeTitleSubtitle;
