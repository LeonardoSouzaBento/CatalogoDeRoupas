import React from "react";
import { BookHeart, Pen, Plus } from "lucide-react";
import { iconMdStyles, iconSmStyles, iconLgStyles } from "@app/styles";
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
    "h-auto w-full max-w-[592px] px-8 py-6 mb-12 min-[688px]:max-w-[672px] lg:mb-0 rounded-xl bg-white shadow-xl",
  wrapperButtons: "flex flex-col min-[680px]:flex-row min-[680px]:flex-wrap gap-4 mb-2",
  h1: "dm-sanstext-gray-900 font-semibold capitalize tracking-normal mb-3 text-left text-[1.380em] sm:text-[1.409em] md:text-[1.423em] lg:text-[1.452em] xl:text-[1.480em] 2xl:text-[1.508em]",
  h2: "w-full mb-7 dm-sans font-light text-left text-neutral-600 text-[1.130em] sm:text-[1.136em] md:text-[1.139em] lg:text-[1.144em] xl:text-[1.150em] 2xl:text-[1.156em] cursor-default",
  button: "h-10 min-[680px]:min-w-[calc(50%-8px)] min-[680px]:max-w-[calc(50%-8px)] flex-auto button",
};

const AdminPannel = () => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.container}`}>
        <h1 className={`${css.h1}`}>Seja bem vindo Fulano</h1>
        <h2 className={`${css.h2}`}>
          Este é seu menu de Administrador. <br /> O que gostaria fazer?
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
