import { HomeContext } from "@/contexts";
import Link from "next/link";
import { useContext } from "react";
import Subtitle from "./subtitle_";

const optionButtons = [
  {
    name: "Adicionar Produto",
    url: "/admin/adicionar-produto",
    icon: "add_circle",
    iconStyles: "ml-[0.5px] span20 rotate-180 -scale-x-100",
  },
  {
    name: "Atualizar Produtos",
    url: "/admin/atualizar-produto",
    icon: "edit_note",
    iconStyles: "-ml-[2px]",
  },
  {
    name: "Ver Favoritos Do Usúario",
    url: "/admin/favoritos-do-usuario",
    icon: "favorite",
    iconStyles: "span20 -ml-0",
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
          <span className="material-symbols-rounded span20 -ml-px">edit</span>
          Editar esta página
        </button>
        {optionButtons.map((item) => (
          <Link key={item.name} className={`${css.button}`} href={item.url}>
            {/* <item.icon {...item.iconStyle} /> */}
            <span className={`material-symbols-rounded ${item.iconStyles}`}>{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdministrationOptions;
