import React, { useContext } from "react";
import Subtitle from "./Subtitle";
import { BookHeart, Pen, Plus } from "lucide-react";
import {
  iconLgStyles,
  iconMdStyles,
  iconSmStyles,
} from "@/app/lucideIconStyles";
import Link from "next/link";
import { HomeContext } from "@/contexts";

const optionButtons = [
  {
    name: "Adicionar Produto",
    url: "/admin/adicionar-produto",
    icon: Plus,
    iconStyle: iconLgStyles,
  },
  {
    name: "Atualizar Produtos",
    url: "/admin/atualizar-produto",
    icon: Pen,
    iconStyle: iconSmStyles,
  },
  {
    name: "Ver Favoritos Do Usúario",
    url: "/admin/favoritos-do-usuario",
    icon: BookHeart,
    iconStyle: iconMdStyles,
  },
];

const css = {
  button: `h-11 w-full br-0 bg-transparent font-normal hover:bg-gray-100 trans`,
};

const AdministrationOptions = () => {
  const { setHomeEditMode } = useContext(HomeContext);

  return (
    <div>
      <Subtitle subtitle="Administrar" />
      <div className="px-0">
        <button
          className={`${css.button}`}
          onClick={() => {
            setHomeEditMode(true);
          }}
        >
          <Pen {...iconMdStyles} />
          Editar esta página
        </button>
        {optionButtons.map((item) => (
          <Link key={item.name} className={`${css.button}`} href={item.url}>
            <item.icon {...item.iconStyle} />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdministrationOptions;
