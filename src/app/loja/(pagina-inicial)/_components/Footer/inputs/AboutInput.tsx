import React, { useState, useEffect } from "react";
import type { ShopInfo } from "@/types/types";
import { X, Check, Trash } from "lucide-react";
import { defaultShopInfo } from "@data/home/publicData";
import { h3Sizes, iconMdStyles } from "@app/styles";
import AlertInfo from "@/app/loja/_ui/AlertInfo";

const css = {
  wrapper: "abso z-3 size-full bg-white p-5 br-lg",
  header:
    "h-10 w-full mb-4 flex justify-between items-center border-b border-gray-300 rounded-none",
  h3:"dm-sans font-medium text-gray-800" + h3Sizes,
  buttonClose:
    "h-9 w-9 absolute top-3 right-3 br-xs centralize bg-bt",
  textarea:
    "w-full h-[calc(100%-294px)] sm:h-[calc(100%-232px)] md:h-[calc(100%-184px)] px-3 mb-4 resize-none overflow-auto caret-indigo-950 focus:outline-none",
  wrapperButtons:
    "w-full h-auto flex flex-col sm:flex-row sm:flex-wrap justify-end gap-2",
  buttons:
    "w-full sm:w-70 md:w-max button !justify-start text-[1.025em] xl:text-[1.035em]",
};

type AboutInputProps = {
  shopInfo: ShopInfo;
  setShopInfo: React.Dispatch<React.SetStateAction<ShopInfo>>;
  setSeeAboutInput: React.Dispatch<React.SetStateAction<boolean>>;
};

const AboutInput = ({
  shopInfo,
  setShopInfo,
  setSeeAboutInput,
}: AboutInputProps): React.ReactElement => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setInputValue(shopInfo.aboutText.join("\n\n"));
  }, []);

  function handleEnterEdit() {
    if (inputValue.length >= 760 && inputValue.length <= 1000) {
      const paragraphs = inputValue
        .split(/\r?\n/)
        .map((p) => p.trim())
        .filter((p) => p);

      setShopInfo({
        ...shopInfo,
        aboutText: paragraphs,
      });
    }
  }

  function handleDiscardChanges() {
    setShopInfo({
      ...shopInfo,
      aboutText: defaultShopInfo.aboutText,
    });
    setSeeAboutInput(false);
  }

  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.header}`}>
        <h3 className={`${css.h3}`}>Edite o Sobre</h3>
        <button
          className={`${css.buttonClose}`}
          onClick={() => {
            setSeeAboutInput(false);
          }}
        >
          <X strokeWidth={2} size={20} />
        </button>
      </div>
      <AlertInfo text="Quebre de linha para definir novos paragrafos." />
      <textarea
        value={inputValue}
        className={`${css.textarea}`}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onClick={() => {
          handleEnterEdit();
        }}
      />
      <div className={`${css.wrapperButtons}`}>
        <button
          className={`${css.buttons} order-[2] sm:order-1`}
          onClick={() => {
            setInputValue("");
          }}
        >
          {" "}
          <Trash {...iconMdStyles} size={19} /> Deletar Todo o Texto
        </button>
        <button className={`${css.buttons} order-3 sm:order-3`}>
          <Check {...iconMdStyles} />
          Salvar
        </button>
        <button
          className={`${css.buttons} order-2 sm:order-2`}
          onClick={handleDiscardChanges}
        >
          <X {...iconMdStyles} />
          Descartar Alterações
        </button>
      </div>
    </div>
  );
};

export default AboutInput;
