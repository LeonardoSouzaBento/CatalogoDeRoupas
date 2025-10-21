import type { ShopInfo } from "@src/types/types";
import React, { useState, useEffect } from "react";

const css = {
  wrapper: "min-h-full",
  wrapperInfo: "mb-4 p-3 pb-0 border border-neutral-200",
  h4: "mb-2 font-h text-neutral-700 font-medium h4-sizes",
  p: "mb-2 text-neutral-700",
  li: "small-p font-p ",
  textarea:
    "w-full centralize p-3 mb-4 border bg-neutral-100 !border-none rounded-sm box-border focus:outline-none font-p",
  button: "",
};

interface MapInputProps {
  canSaveMap: boolean;
  setMapSaved: React.Dispatch<React.SetStateAction<boolean>>;
  setCanSaveMap: React.Dispatch<React.SetStateAction<boolean>>;
  shopInfo: ShopInfo;
  setShopInfo: React.Dispatch<React.SetStateAction<ShopInfo>>;
}

const MapInput = ({
  canSaveMap,
  setMapSaved,
  setCanSaveMap,
  shopInfo,
  setShopInfo,
}: MapInputProps): React.ReactElement => {
  const [inputValue, setInputValue] = useState<string>(
    "Cole aqui o novo link copiado do Google Maps"
  );

  function handleUpdateLinkMap() {
    const match = inputValue.match(/src="([^"]+)"/);

    if (match && match[1]) {
      const linkOfInput = match[1];
      setShopInfo({ ...shopInfo, urlMap: linkOfInput });
    } else {
      console.warn("Link do mapa não encontrado no iframe informado.");
    }
  }

  useEffect(() => {
    if (inputValue !== "") {
      handleUpdateLinkMap();
    }
  }, [inputValue]);

  useEffect(() => {
    if (canSaveMap) {
      handleUpdateLinkMap();
      setMapSaved(true);
      setCanSaveMap(false);
    }
  }, [canSaveMap]);

  return (
    <div className={`${css.wrapper}`}>
      <textarea
        value={inputValue}
        onClick={() => {
          setInputValue("");
        }}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className={`${css.textarea}`}
        id="novoCodigo"
        placeholder="Cole aqui o novo link copiado do Google Maps"
      />
      <div className={`${css.wrapperInfo}`}>
        <h4 className={`${css.h4}`}>Veja como pegar o link do mapa</h4>
        <ul className={`${css.p} list-decimal pl-4 space-y-2`}>
          <li className={`${css.li}`}>
            Pesquise no Google Maps pela sua loja ou pelo endereço dela. Clique
            no endereço.
          </li>
          <li className={`${css.li}`}>
            Procure o botão <span className="underline">"Compartilhar"</span> e
            clique nele.
          </li>
          <li className={`${css.li}`}>
            Clique no botão{" "}
            <span className="underline">"Incorporar um mapa"</span>.
          </li>
          <li className={`${css.li}`}>
            Clique no botão <span className="underline">"Copiar HTML"</span>.
          </li>
          <li className={`${css.li}`}>Cole no espaço cinza acima o texto copiado. Pronto.</li>
        </ul>
      </div>
    </div>
  );
};

export default MapInput;
