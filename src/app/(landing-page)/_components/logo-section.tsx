import { ButtonSeeEditMode } from '@/app/_ui';
import { BooleanSetter } from '@/types/types';

const css = {
  divLogo: 'w-full min-h-21 pb-1 flex-center flex-col z-6 rounded-none',
  pLogo: 'leading-none mb-1 font-logo text-white font-medium',
  pSubtitle: 'leading-none text-white !font-thin normal-p',
  normalBackground: 'bg-stone-800 relative',
  landingPageBackground: 'absolute top-0 left-0 bg-linear-to-b from-stone-800/30 to-transparent',
};

const LogoSection = ({
  page,
  setSeeInputNameShop = () => {},
  homeEditMode = false,
}: {
  page?: string;
  setSeeInputNameShop?: BooleanSetter;
  homeEditMode?: boolean;
}): React.ReactElement => {
  return (
    <div className="w-full h-max relative">
      <div
        className={` ${
          page === 'landing-page' ? css.landingPageBackground : css.normalBackground
        } ${css.divLogo}`}>
        <h1 className={`${css.pLogo}`}>Roupas Online</h1>
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
