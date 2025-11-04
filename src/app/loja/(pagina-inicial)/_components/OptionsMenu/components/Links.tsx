import React from "react";
import { iconMdStyles } from "@/app/lucideIconStyles";
import { BookHeart, User } from "lucide-react";
import Link from "next/link";

const pageOptions = [
  { name: "Meus favoritos", link: "/loja/favoritos", icon: BookHeart },
  { name: "Minha Conta", link: "/loja/minha-conta", icon: User },
];

const css = {
  wrapper: `w-full flex flex-col i-center j-start`,
  wrapperLink: `h-12 w-full flex i-center pl-[22px] gap-3 br-0 bg-transparent hover:bg-gray-100 hover:pl-4 transition-all duration-200`,
  link: `font-normal bg-transparent hover:bg-gray-100 px-0 text-[1.09em] hover:text-black transition-colors`,
};

const Links = () => {
  return (
    <div className={`${css.wrapper}`}>
      {pageOptions.map((item) => (
        <div key={item.name} className={`${css.wrapperLink}`}>
          <item.icon {...iconMdStyles} />
          <Link href={item.link} className={`${css.link}`}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Links;
