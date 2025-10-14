import { Menu } from "lucide-react";
import React from "react";

const css = {
  header: "bg-violet-800 p-6",
  divLogo: "",
  nav: "flex justify-between md:grid md:grid-cols-4 md:gap-4 md:align-start ",
  p: "text-indigo-50",
  a: "font-h text-indigo-50 w-max text-[1.180em] sm:text-[1.200em] md:text-[1.210em] lg:text-[1.230em] xl:text-[1.250em] 2xl:text-[1.270em]",
  nameShop: "",
  shopSubtitle: "",
  wrapperIcon: "",
  icon: { color: "white", strokeWidth: 2.3 },
};

const Header = (): React.ReactElement => {
  return (
    <header className={`${css.header}`}>
      <div className={`${css.divLogo}`}>
        <p className={`${css.nameShop}`}></p>
        <p className={`${css.shopSubtitle}`}></p>
      </div>
      <nav className={`${css.nav}`}>
        <a className={`${css.a}`}>Como Funciona</a>
        <a className={`${css.a}`}>Preços</a>
        <a className={`${css.a}`}>Fale Conosco</a>
        <span className={`${css.wrapperIcon}`}>
          <Menu {...css.icon} />
        </span>
      </nav>
    </header>
  );
};

export default Header;
