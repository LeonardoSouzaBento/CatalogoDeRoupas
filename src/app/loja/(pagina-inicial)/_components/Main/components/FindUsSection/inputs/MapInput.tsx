import WrapperForEditMode from "@/app/loja/_ui/WrapperForEditMode";
import type { ShopInfo } from "@localtypes/types";
import React, { useState, useEffect } from "react";
import SaveMapButton from "../components/SaveMapButton";

const css = {
  wrapper: "min-h-full",
  wrapperInfo: "mb-4 p-3 pb-0 border border-neutral-200",
  h4: "mb-2 text-neutral-700 font-medium h4-sizes",
  p: "mb-2 text-neutral-700",
  li: "small-p  ",
  textarea:
    "w-full centralize p-3 mb-4 border bg-neutral-100 !border-none rounded-sm box-border focus:outline-none ",
  button: "",
};

interface MapInputProps {
  shopInfo: ShopInfo;
  setShopInfo: React.Dispatch<React.SetStateAction<ShopInfo>>;
}

const MapInput = ({
  shopInfo,
  setShopInfo,
}: MapInputProps): React.ReactElement => {
  const [inputValue, setInputValue] = useState<string>(
    "Cole aqui o novo link copiado do Google Maps"
  );
  // const [canSave, setCanSave] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue !== "") {
      setShopInfo({ ...shopInfo, urlMap: inputValue });
    }
  }, [inputValue]);

  return (
    <WrapperForEditMode
      title="Atualize Seu Mapa"
      seeButtonClose={true}
      setState={setSeeMapInput}
    >
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
              Pesquise no Google Maps pela sua loja ou pelo endereço dela.
              Clique no endereço.
            </li>
            <li className={`${css.li}`}>
              Procure o botão{" "}
              <span className="underline">&quot;Compartilhar&quot;</span> e
              clique nele.
            </li>
            <li className={`${css.li}`}>
              Clique no botão{" "}
              <span className="underline">&quot;Incorporar um mapa&quot;</span>.
            </li>
            <li className={`${css.li}`}>
              Clique no botão{" "}
              <span className="underline">&quot;Copiar HTML&quot;</span>.
            </li>
            <li className={`${css.li}`}>
              Cole no espaço cinza acima o texto copiado. Pronto.
            </li>
          </ul>
        </div>
      </div>
      <SaveMapButton />
    </WrapperForEditMode>
  );
};

export default MapInput;
