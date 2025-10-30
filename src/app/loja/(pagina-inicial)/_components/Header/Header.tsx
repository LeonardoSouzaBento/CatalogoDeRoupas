import React, { useState } from "react";
import Button from "./components/Button";
import type { ButtonType } from "./components/Button";
import NameShopInput from "./inputs/NameShopInput";
import { User, Menu, Search, Heart } from "lucide-react";
import LogoHeader from "@/app/(landing-page)/_components/LogoHeader";

const buttons: ButtonType[] = [
  { icon: User, name: "Minha Conta", link: "/loja/minha-conta" },
  { icon: Menu, name: "Mais Opções" },
  { icon: Search, isSearchButton: true, link: "/loja/pesquisar" },
  { icon: Heart, name: "Favoritos", link: "/loja/favoritos" },
];

const css = {
  header:
    "size-auto sticky top-0 left-0 z-5 bg-white/36 backdrop-blur-xs shadow-soft-soft border-b border-[#ffffff22]",
  wrapper:
    "w-[calc(100%-32px)] max-w-[1180px] m-auto flex justify-between items-center flex-wrap gap-4 sm:flex-nowrap md:justify-center lg:gap-8",
  nav: "h-18 w-full flex justify-between items-center sm:justify-center gap-3 sm:gap-4 md:gap-5 flex-auto",
};

const Header = (): React.ReactElement => {
  const [seeInputNameShop, setSeeInputNameShop] = useState<boolean>(false);

  return (
    <>
      <LogoHeader />
      <header className={css.header}>
        <div className={`${css.wrapper}`}>
          <nav className={`${css.nav}`}>
            {buttons.map((button, index) => (
              <Button
                key={index}
                icon={button.icon}
                isSearchButton={button.isSearchButton}
                name={button.name}
                link={button.link}
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
