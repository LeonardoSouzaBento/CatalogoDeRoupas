import React from "react";

const optionButtons = [
  { name: "Editar Página Inicial", path: "adicionar-produto" },
  { name: "Adicionar Produto", path: "adicionar-produto" },
  { name: "Atualizar Produtos", path: "adicionar-produto" },
  { name: "Ver Favoritos Do Usúario", path: "adicionar-produto" },
];

const css = {
  wrapper: "min-h-[100vh] min-w-[100vw] centralize bg-transparent",
  container:
    "h-auto w-[calc(100%-24px)] max-w-156 p-6 br-lg bg-white shadow-xl",
  wrapperButtons: "flex flex-col gap-4 mb-4",
  h2: "text-left",
  button: "button font-medium",
};

const AdminPannel = () => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.container}`}>
        <h1 className="mb-2">Seja bem vindo Fulano</h1>
        <h2 className={`${css.h2}`}>
          Esse é o seu painel de Administrador. O que você quer fazer?
        </h2>

        <div className={`${css.wrapperButtons}`}>
          {optionButtons.map((button) => (
            <button key={button.name} className={`${css.button}`}>
              {button.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPannel;
