import { UserData } from '@/types/types';
import React from 'react'

const FirstTable = ({ userData }: { userData: UserData }) => {
  const css = {
    caption: "min-h-7 pb-5 flex-center justify-start! box-border  text-left",
    tr: "h-max flex flex-col sm:flex-row sm:items-start ",
    thEtd: "h-10 px-5 flex i-center j-start sm:[j-center]",
    th: "bg-neutral-200 font-medium",
    td: "bg-white",
  };

  return (
    <table className="h-max w-full border-collapse">
      <caption className={`${css.caption}`}>
        Informações gerais
      </caption>

      <tbody className="flex flex-col sm:flex-row bs">
        <tr className={`${css.tr}`}>
          <th className={`${css.th} ${css.thEtd}`}>Nome</th>
          <td className={`${css.td} ${css.thEtd}`}>{userData.name}</td>
        </tr>
        <tr className={`${css.tr}`}>
          <th className={`${css.th} ${css.thEtd}`}>Sexo</th>
          <td className={`${css.td} ${css.thEtd}`}>{userData.sex}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default FirstTable;
