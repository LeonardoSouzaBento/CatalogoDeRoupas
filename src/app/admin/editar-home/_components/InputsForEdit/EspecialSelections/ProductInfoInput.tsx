import { iconMdStyles, inputClasses } from "@src/data/styles";
import { Check, X } from "lucide-react";
import React from "react";

const css = {
  wrapper: `w-full flex flex-col items-start gap-2 mb-4`,
  wrapperInput: `w-full flex flex-col items-start gap-2`,
  button: "base-button-light min-w-9 !h-9 !px-0 centralize mr-0",
  wrapperButton: "w-full flex justify-end",
  saveButton: "base-button-light w-full !justify-center",
  label: "font-p font-medium",
};

const ProductInfoInput = ({
  setSeeProductInfoInput,
  id,
}: {
  id: number;
  setSeeProductInfoInput: React.Dispatch<React.SetStateAction<boolean>>;
}): React.ReactElement => {
  return (
    <div className="w-full">
      <div className={`${css.wrapperButton}`}>
        <button
          className={`${css.button}`}
          onClick={() => {
            setSeeProductInfoInput(false);
          }}
        >
          <X {...iconMdStyles} />
        </button>
      </div>
      <div className={`${css.wrapper}`}>
        <div className={`${css.wrapperInput}`}>
          <label htmlFor={`nome ${id}`} className={`${css.label}`}>
            Nome
          </label>
          <input
            type="text"
            id={`nome ${id}`}
            className={`${inputClasses}`}
            placeholder="Digite o nome"
          />
        </div>
        <div className={`${css.wrapperInput}`}>
          <label htmlFor={`price ${id}`} className={`${css.label}`}>
            Preço
          </label>
          <input
            type="text"
            id={`price ${id}`}
            className={`${inputClasses}`}
            placeholder="Ex.: 80"
          />
        </div>
      </div>

      <button className={`${css.saveButton}`}>
        Salvar <Check {...iconMdStyles} />
      </button>
    </div>
  );
};

export default ProductInfoInput;
