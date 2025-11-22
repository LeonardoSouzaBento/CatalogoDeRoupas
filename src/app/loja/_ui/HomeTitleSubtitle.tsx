import { iconMd } from "@/app/lucideIconStyles";
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
  h1: `font-bold capitalize leading-10 text-center text-[1.22857em]`,
  h1SelectGender: "text-center capitalize leading-none! text-neutral-700 pb-4",
  h2: `w-full mb-6 font-normal text-center text-neutral-600/88 capitalize`,
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
          <h1
            className={`${section == "genders" ? css.h1SelectGender : css.h1}`}
          >
            {title}
          </h1>

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
            <PenOff {...iconMd} color="white" />
          </div>
        </button>
      )}
    </div>
  );
};

export default HomeTitleSubtitle;
