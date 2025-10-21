import React from "react";

const css = {
  header:
    "size-auto",
  divLogo:
    "w-full h-26 bg-gradient-to-b from-black to-stone-800 centralize flex-col relative z-8 rounded-none",
  pLogo:
    "leading-none mb-1 font-logo text-white text-[1.780em] sm:text-[1.830em] md:text-[1.854em] lg:text-[1.902em] xl:text-[1.950em] 2xl:text-[1.998em]",
  pSubtitle:
    "leading-none text-white font-h font-light text-[1.050em] sm:text-[1.053em] md:text-[1.054em] lg:text-[1.057em] xl:text-[1.060em] 2xl:text-[1.063em]",
};

const Header = (): React.ReactElement => {
  return (
    <header className={css.header}>
      <div className={`${css.divLogo}`}>
        <p className={`${css.pLogo}`}>Roupas Online</p>
        <p className={`${css.pSubtitle}`}>Guardamos suas curtidas</p>
      </div>
    </header>
  );
};

export default Header;
