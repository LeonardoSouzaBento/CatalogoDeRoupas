import React from "react";
import { BookHeart, Pen, Plus } from "lucide-react";
import { iconMdStyles, iconSmStyles, iconLgStyles } from "@data/styles";
import "../globals.css"
import "./page.css";

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
  wrapper: "min-h-[100vh] min-w-[100vw] px-3 centralize bg-transparent",
  container:
    "h-auto w-full max-w-[592px] px-8 py-6 min-[688px]:max-w-[672px] rounded-xl bg-white shadow-xl",
  wrapperButtons: "flex flex-col min-[680px]:flex-row min-[680px]:flex-wrap gap-4 mb-2",
  h2: "!text-left mb-6",
  button: "h-10 min-[680px]:min-w-[calc(50%-8px)] flex-auto button",
};

const AdminPannel = () => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.container}`}>
        <h1 className="mb-3 leading-8">Seja bem vindo Fulano</h1>
        <h2 className={`${css.h2} leading-[26px]`}>
          Este é o seu painel de Administrador. <br /> O que você quer fazer?
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
