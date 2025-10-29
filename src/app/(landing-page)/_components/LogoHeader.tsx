const css = {
  divLogo: "w-full h-21 pb-1 centralize flex-col relative z-4 rounded-none",
  normalBackground: "bg-stone-800 ",
  pLogo:
    "leading-none mb-1 font-logo text-white text-[1.550em] sm:text-[1.565em] md:text-[1.572em] lg:text-[1.586em] xl:text-[1.600em] 2xl:text-[1.614em]",
  pSubtitle:
    "leading-none text-white !font-thin text-[1.050em] sm:text-[1.053em] md:text-[1.054em] lg:text-[1.057em] xl:text-[1.060em] 2xl:text-[1.063em]",
  landingPageStyles: "abso bg-gradient-to-b from-stone-800/25 to-transparent",
};

const LogoHeader = ({ page }: { page?: string }): React.ReactElement => {
  return (
    <div
      className={`${css.divLogo} ${
        page === "landing-page" ? css.landingPageStyles : css.normalBackground
      }`}
    >
      <p className={`${css.pLogo}`}>Roupas Online</p>
      <p className={`${css.pSubtitle}`}>Guardamos suas curtidas</p>
    </div>
  );
};

export default LogoHeader;
