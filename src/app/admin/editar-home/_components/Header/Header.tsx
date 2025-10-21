import React, { useState } from "react";
import IconButton from "./Components/IconButton";
import { User, Menu, Search, Heart } from "lucide-react";
import type { IconButtonType } from "./Components/IconButton";
import NameShopInput from "../InputsForEdit/NameShopInput";

const buttonNameIcons: IconButtonType[] = [
  { icon: User, name: "Minha Conta" },
  { icon: Menu, name: "Mais Opções" },
  { icon: Search, isSearchButton: true },
  { icon: Heart, name: "Favoritos" },
];

const css = {
  header:
    "size-auto sticky top-0 left-0 z-5 shadow-md bg-white/30 backdrop-blur-sm border-b border-white/25",
  wrapper:
    "w-[calc(100%-32px)] max-w-[1180px] m-auto py-4 flex justify-between items-center flex-wrap gap-4 sm:flex-nowrap md:justify-center lg:gap-8",
  divLogo:
    "w-full h-24 bg-gradient-to-t from-black to-stone-800 centralize flex-col relative z-8 rounded-none",
  nav: "h-16 w-full flex justify-between items-center sm:justify-center gap-3 sm:gap-4 md:gap-5 flex-auto",
  pLogo:
    "leading-none mb-1 font-logo text-white text-[1.780em] sm:text-[1.830em] md:text-[1.854em] lg:text-[1.902em] xl:text-[1.950em] 2xl:text-[1.998em]",
  pSubtitle:
    "leading-none text-white font-h font-light text-[1.050em] sm:text-[1.053em] md:text-[1.054em] lg:text-[1.057em] xl:text-[1.060em] 2xl:text-[1.063em]",
};

const Header = (): React.ReactElement => {
  const [seeInputNameShop, setSeeInputNameShop] = useState<boolean>(false);

  return (
    <>
      <div className={`${css.divLogo}`}>
        <p className={`${css.pLogo}`}>Roupas Online</p>
        <p className={`${css.pSubtitle}`}>Guardamos suas curtidas</p>
      </div>
      <header className={css.header}>
        <div className={`${css.wrapper}`}>
          <nav className={`${css.nav}`}>
            {buttonNameIcons.map((button, index) => (
              <IconButton
                key={index}
                icon={button.icon}
                isSearchButton={button.isSearchButton}
                name={button.name}
              />
            ))}
          </nav>
        </div>
        {seeInputNameShop && (
          <NameShopInput setSeeInputNameShop={setSeeInputNameShop} />
        )}
      </header>
    </>
  );
};

export default Header;
