import { iconMd } from "@/app/lucideIconStyles";
import { BooleanSetter } from "@/types/types";
import { Pen } from "lucide-react";

interface Props {
  setState: BooleanSetter;
  styles?: string;
  positionStyles?: string;
  variantion?: string;
  section?: string;
}

const ButtonSeeEditMode = ({
  setState,
  styles,
  positionStyles,
  variantion,
  section,
}: Props) => {
  const css = {
    squareButton: `centralize h-11 min-w-11 p-0 bg-gradient-to-br from-stone-800 to-stone-700 br-2xl shadow-soft`,
    titleButton: `h-11 m-auto mb-5 bg-gradient-to-br from-stone-800 to-stone-700 br-2xl text-white shadow-soft hover:shadow-soft-hover`,
    icon: "material-symbols-rounded font-[300]! text-[1.35em]! text-white ",
    defaultPosition: `absolute bottom-3 right-3`,
  };
  const isTitle = variantion === "title";
  const clothesSection = section === "clothes";

  return (
    <button
      className={`${!isTitle ? css.squareButton : css.titleButton} ${
        positionStyles || css.defaultPosition
      } ${clothesSection && "mb-3!"} ${styles}`}
      onClick={() => {
        setState(true);
      }}
    >
      {!variantion && <span className={css.icon}>stylus</span>}
      {variantion === "title" && "Editar seção"}
      {variantion === "title" && <Pen {...iconMd} color="white" />}
    </button>
  );
};

export default ButtonSeeEditMode;
