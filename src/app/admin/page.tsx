import "./page.css";
import React from "react";
import { BookHeart, Pen, Plus } from "lucide-react";
import { iconMdStyles, iconSmStyles, iconLgStyles } from "@data/styles";
import "../globals.css"

const optionButtons = [
  {
    name: "Editar Página Inicial",
    path: "adicionar-produto",
    icon: Pen,
    iconStyle: iconSmStyles,
  },
  {
    name: "Adicionar Produto",
    path: "adicionar-produto",
    icon: Plus,
    iconStyle: iconLgStyles,
  },
  {
    name: "Atualizar Produtos",
    path: "adicionar-produto",
    icon: Pen,
    iconStyle: iconSmStyles,
  },
  {
    name: "Ver Favoritos Do Usúario",
    path: "adicionar-produto",
    icon: BookHeart,
    iconStyle: iconMdStyles,
  },
];

const css = {
  wrapper: "min-h-[100vh] min-w-[100vw] centralize bg-transparent",
  container:
    "h-auto w-[calc(100%-24px)] max-w-156 p-6 br-lg bg-white shadow-xl",
  wrapperButtons: "flex flex-col gap-4 mb-4",
  h2: "!text-left",
  button: "h-10 button",
};

const AdminPannel = () => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.container}`}>
        <h1 className="mb-2">Seja bem vindo Fulano</h1>
        <h2 className={`${css.h2}`}>
          Este é o seu painel de Administrador <br /> O que você quer fazer?
        </h2>

        <div className={`${css.wrapperButtons}`}>
          {optionButtons.map((button) => (
            <button key={button.name} className={`${css.button}`}>
              <button.icon {...button.iconStyle}/>
              {button.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPannel;
