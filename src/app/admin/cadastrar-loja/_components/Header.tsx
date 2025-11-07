import { BooleanSetter } from "@/types/types";
import React from "react";

const css = {
  wrapper: `p-6 mb-6 flex flex-col gap-3 text-gray-600 font-medium bs `,
  wrapperButtons: `flex flex-col min-[480px]:flex-row gap-5`,
  title: `text-[1.06em] uppercase tracking-wide text-gray-500`,
  button: `h-9 rounded-full bg-gray-200/60 text-gray-500 trans`,
  selected: `bg-blue-600! text-white!`,
};

const Header = ({
  seeAddresForm,
  setSeeAddresForm,
}: {
  seeAddresForm: boolean;
  setSeeAddresForm: BooleanSetter;
}) => {
  return (
    <div className={`${css.wrapper}`}>
      <p className={`${css.title}`}>Etapas:</p>

      <div className={`${css.wrapperButtons}`}>
        <button
          className={`${css.button} ${!seeAddresForm && css.selected}`}
          onClick={() => {
            setSeeAddresForm(false);
          }}
        >
          1º Informações gerais
        </button>
        <button
          className={`${css.button} ${seeAddresForm && css.selected}`}
          onClick={() => {
            setSeeAddresForm(true);
          }}
        >
          2º Endereço
        </button>
      </div>
    </div>
  );
};

export default Header;
