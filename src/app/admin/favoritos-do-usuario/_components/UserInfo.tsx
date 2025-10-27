"use client";
import { iconLgStyles } from "@app/styles";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const UserInfo = () => {
  const [seeMoreUserInfo, setSeeMoreUserInfo] = useState<boolean>(false);

  const css = {
    mainWrapper: `mb-4 br-lg p-4 border bs-light-color`,
    title:
      "mb-2 p-title",
    buttonSeeMore: "button !h-9 !pl-4 !pr-[13px]",
    wrapperUserInfo: "br-lg",
    wrapperUserDetail: "",
    pDetail: "font-medium",
    wrapperTable: "",
  };

  return (
    <div className={`${css.mainWrapper}`}>
      <div className={`${css.wrapperUserInfo}`}>
        <table className="w-full border-collapse">
          <caption className={`${css.title}`}>
            Informações do usuário selecionado
          </caption>
          <tbody>
            <tr className="border-b bs-color">
              <th className="font-semibold p-2 align-top">Nome</th>
              <td className="p-2">fulano de tal</td>
            </tr>
            <tr>
              <th className="font-semibold p-2 align-top">Sexo</th>
              <td className="p-2">masculino</td>
            </tr>
          </tbody>
        </table>

        <div className={`${css.wrapperTable}`}></div>
      </div>

      <div className="w-full flex justify-end">
        <button
          className={`${css.buttonSeeMore}`}
          onClick={() => setSeeMoreUserInfo(!seeMoreUserInfo)}
        >
          {!seeMoreUserInfo ? " Ver Mais" : " Ver Menos"}
          {!seeMoreUserInfo ? (
            <ChevronDown {...iconLgStyles} />
          ) : (
            <ChevronUp {...iconLgStyles} />
          )}
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
