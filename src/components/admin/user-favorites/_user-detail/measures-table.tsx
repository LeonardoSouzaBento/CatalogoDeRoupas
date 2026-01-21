import { UserData } from "@/types/types";

const MeasuresTable = ({ userData }: { userData: UserData }) => {
  const css = {
    tr: "flex flex-col i-star border-b border",
    th: "",
  };

  return (
    <table className="w-full border-collapse">
      <caption className=" text-left">Medidas</caption>

      <tbody className="flex ">
        <tr className={`${css.tr}`}>
          <th className="font-medium p-2 align-top">Camisa</th>
          <td className="p-2">{userData.camisa}</td>
        </tr>
        <tr className={`${css.tr}`}>
          <th className="font-medium p-2 align-top">Calça</th>
          <td className="p-2">{userData.calça}</td>
        </tr>
        <tr className={`${css.tr}`}>
          <th className="font-medium p-2 align-top">Calçado</th>
          <td className="p-2">{userData.calçado}</td>
        </tr>
      </tbody>
    </table>
  );
};

export {MeasuresTable};
