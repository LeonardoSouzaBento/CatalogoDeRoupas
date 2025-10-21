import React, { useState, useContext } from "react";
import { Check, X } from "lucide-react";
import { PublicDataContext } from "@contexts/PublicDataContext";
import { inputClasses, iconMdStyles, iconSmStyles } from "@data/styles";

const css = {
  wrapper: "pt-2 bg-gradient-to-t from-neutral-100 to-neutral-200",
  wrapperForm:
    "w-[calc(100%-16px)] h-max p-4 m-auto max-w-221 flex flex-col gap-2 bg-white br-lg relative shadow-md",
  label:
    "font-p font-medium !text-neutral-800 border-b border-neutral-300 pb-2",
  wrapperButtons: "flex items-start gap-3",
  buttonSend: "button",
  buttonClose: "h-9 w-9 absolute top-2 right-2 br-xs centralize bg-bt",
};

type NameShopInputProps = {
  setSeeInputNameShop: React.Dispatch<React.SetStateAction<boolean>>;
};

const NameShopInput = ({
  setSeeInputNameShop,
}: NameShopInputProps): React.ReactElement => {
  const [inputValue, setInputValue] = useState<string>("");
  const { shopInfo, setShopInfo } = useContext(PublicDataContext);

  function handleEdit() {
    if (inputValue.length >= 6) {
      setShopInfo({ ...shopInfo, name: inputValue });
    }
  }

  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.wrapperForm}`}>
        <button
          className={`${css.buttonClose}`}
          onClick={() => {
            setSeeInputNameShop(false);
          }}
        >
          <X {...iconSmStyles} />
        </button>
        <label htmlFor="name" className={`${css.label}`}>
          Digite o nome da sua loja
        </label>
        <input
          id="name"
          name="name"
          className={`${inputClasses} !mb-1`}
          value={inputValue}
          placeholder="Digite aqui"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className={`${css.wrapperButtons}`}>
          <button className={`${css.buttonSend}`} onClick={handleEdit}>
            Voltar
          </button>
          <button className={`${css.buttonSend}`} onClick={handleEdit}>
            Salvar
            <Check {...iconMdStyles} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameShopInput;
