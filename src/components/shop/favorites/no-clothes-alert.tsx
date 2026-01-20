import React from "react";

const NoClothesAlert = () => {
  const css = {
    wrapper: `max-w-max p-4 px-6 flex items-center justify-center gap-2 br-md bg-neutral-50`,
    p: ``,
    button: ``,
  };

  return (
    <div className={`${css.wrapper}`}>
      <p>Não há roupas ou outros produtos curtidos por você.</p>
      <span className="material-symbols-rounded text-rose-400 rotate-10">heart_broken</span>
    </div>
  );
};

export default NoClothesAlert;
