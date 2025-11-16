import { iconMdStyles } from "@/app/lucideIconStyles";
import { HomeContext } from "@/contexts";
import { BooleanSetter } from "@/types/types";
import { PenOff } from "lucide-react";
import { useContext } from "react";
import ButtonSeeEditMode from "./ButtonSeeEditMode";

interface HomeTitleSubtitleProps {
  title: string;
  subtitle?: string;
  section?: string;
  sectionEditMode?: boolean;
  setSectionEditMode?: BooleanSetter;
}

const css = {
  h1: `font-bold capitalize leading-10 text-center text-[1.262em] `,
  h1SelectGender:
    "text-center text-[1.262em] capitalize leading-none! font-light text-neutral-800 pb-5",
  h2: `w-full mb-6 font-light text-center text-neutral-800 `,
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
          {section == "genders" ? (
            <div className={`flex justify-between gap-3`}>
              <span className="material-symbols-outlined text-[#c91d73]">
                family_restroom
              </span>
              <h1 className={`${css.h1SelectGender}`}>{title}</h1>
            </div>
          ) : (
            <h1 className={`${css.h1}`}>{title}</h1>
          )}

          {subtitle && (
            <h2 className={`${css.h2} ${section == "clothes" && "mb-3!"}`}>
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
          className={`h-11 min-w-52 centralize m-auto mb-5 br-2xl 
            bg-gradient-to-br from-stone-800 to-stone-800/88 text-white shadow-soft hover:shadow-soft-hover ${
              section === "clothes" && "mb-3!"
            }`}
          onClick={() => {
            setSectionEditMode(false);
          }}
        >
          Fechar edição
          <div className="wrapper-icon">
            <PenOff {...iconMdStyles} color="white" />
          </div>
        </button>
      )}
    </div>
  );
};

export default HomeTitleSubtitle;
