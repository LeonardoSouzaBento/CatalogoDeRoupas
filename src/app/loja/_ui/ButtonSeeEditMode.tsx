import { iconMdStyles } from "@/app/lucideIconStyles";
import { BooleanSetter } from "@/types/types";
import { Pen } from "lucide-react";

const ButtonSeeEditMode = ({
  setState,
  styles,
  positionStyles,
  variantion,
  section,
}: {
  setState: BooleanSetter;
  styles?: string;
  positionStyles?: string;
  variantion?: string;
  section?: string;
}) => {
  const css = {
    squareButton: `square-button h-11! min-w-11! p-0
    bg-white/77! shadow-lg/8 bs`,
    titleButton: `m-auto mb-5 br-lg bg-white shadow-soft hover:shadow-soft-hover`,
    icon: "material-symbols-outlined line-span font-[550]! text-gray-800 ",
    defaultPosition: `absolute bottom-3 right-3`,
  };

  return (
    <button
      className={`${
        variantion === "title" ? css.titleButton : css.squareButton
      } ${positionStyles ? positionStyles : css.defaultPosition} ${styles} ${section === "clothes" && "mb-2!"}`}
      onClick={() => {
        setState(true);
      }}
    >
      {!variantion && <span className={css.icon}>stylus</span>}
      {variantion === "title" && "Editar seção"}
      {variantion === "title" && <Pen {...iconMdStyles} strokeWidth={3} />}
    </button>
  );
};

export default ButtonSeeEditMode;
