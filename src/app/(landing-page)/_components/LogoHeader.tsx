const css = {
  divLogo:
    "w-full h-22 pb-1 bg-gradient-to-b from-stone-950 to-stone-800 centralize flex-col relative z-8 rounded-none",
  pLogo:
    "leading-none mb-1 font-logo text-white text-[1.780em] sm:text-[1.830em] md:text-[1.854em] lg:text-[1.902em] xl:text-[1.950em] 2xl:text-[1.998em]",
  pSubtitle:
    "leading-none text-white font-h !font-thin text-[1.050em] sm:text-[1.053em] md:text-[1.054em] lg:text-[1.057em] xl:text-[1.060em] 2xl:text-[1.063em]",
};

const LogoHeader = ({ page }: { page?: string }): React.ReactElement => {
  const backgroundStyle =
    page === "landing-page"
      ? "bg-stone-800"
      : "bg-gradient-to-b from-stone-950 to-stone-800";

  return (
    <div className={`${css.divLogo} ${backgroundStyle}`}>
      <p className={`${css.pLogo}`}>Roupas Online</p>
      <p className={`${css.pSubtitle}`}>Guardamos suas curtidas</p>
    </div>
  );
};

export default LogoHeader;
