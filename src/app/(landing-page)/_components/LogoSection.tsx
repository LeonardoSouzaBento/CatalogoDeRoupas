import { ButtonSeeEditMode } from "@/app/loja/_ui";
import { BooleanSetter } from "@/types/types";

const css = {
  divLogo: "w-full min-h-21 pb-1 centralize flex-col relative z-4 rounded-none",
  normalBackground: "bg-stone-800 ",
  pLogo:
    "leading-none mb-1 font-logo text-white text-[1.542857em]",
  pSubtitle:
    "leading-none text-white !font-thin p18",
  landingPageStyles: "abso bg-gradient-to-b from-stone-800/25 to-transparent",
};

const LogoSection = ({
  page,
  setSeeInputNameShop = ()=>{},
  homeEditMode = false,
}: {
  page?: string;
  setSeeInputNameShop?: BooleanSetter;
  homeEditMode?: boolean;
}): React.ReactElement => {
  return (
    <div className="w-full h-max relative">
      <div
        className={`${css.divLogo} ${
          page === "landing-page" ? css.landingPageStyles : css.normalBackground
        }`}
      >
        <p className={`${css.pLogo}`}>Roupas Online</p>
        <p className={`${css.pSubtitle}`}>Guardamos suas curtidas</p>
      </div>
      {homeEditMode && (
        <ButtonSeeEditMode
          setState={setSeeInputNameShop}
          positionStyles="absolute top-5 right-4 z-5"
        />
      )}
    </div>
  );
};

export default LogoSection;
