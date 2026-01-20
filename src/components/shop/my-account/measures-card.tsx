import AlertInfo from '@/app/_ui/alert-info';
import HeaderCard from '@/app/_ui/HeaderCard';
import { iconMd, iconSm } from '@/app/css/lucideIconStyles';
import { UserData } from '@/types/types';
import { CircleQuestionMark, Pen } from 'lucide-react';
import React from 'react';

// const shirtSizes = ["PP", "P", "M", "G", "GG", "GGG"];

const css = {
  wrapper: `w-full sm:w-auto flex flex-wrap max-[375px]:flex-col 
  border max-[375px]:border-b-transparent! mb-5 br-md crop`,
};

const MeasuresCard = ({ userData }: { userData: UserData }) => {
  const measuresData: Measure[] = [
    { type: 'Camisa', value: userData.camisa },
    { type: 'Calça', value: userData.calça },
    { type: 'Calçado', value: userData.calçado },
  ];

  return (
    <>
      <HeaderCard title="Minhas medidas" icon="square_foot" iconStyles="mb-[1.5px] " />
      <AlertInfo text="Definir suas medidas é importante para mostrarmos roupas preferencialmente do seu tamanho" />
      <table className="w-full">
        <tbody className={`${css.wrapper}`}>
          {measuresData.map((measure, index) => (
            <MeasureItem key={index} {...measure} />
          ))}
        </tbody>
      </table>
      <button className="button max-[375px]:text-left mb-5 w-full">
        <div className="wrapper-icon">
          <CircleQuestionMark {...iconMd} />
        </div>
        Ver Guia De Medidas
      </button>
      <button className="button max-[375px]:text-left w-full">
        <Pen {...iconSm} /> Atualizar Minhas Medidas
      </button>
    </>
  );
};

export default MeasuresCard;

/* measure item */
interface Measure {
  type: string | undefined;
  value: string | undefined | number;
}

const MeasureItem: React.FC<Measure> = ({ type, value }) => {
  const css = {
    wrapper:
      `w-1/3 max-[375px]:w-full flex flex-col min-[375px]:border-r 
      min-[375px]:border-gray-300 mr-md crop last:border-none`,
    thEtd: "h-10 flex j-sart i-center box-border px-4",
    th: `font-normal text-neutral-900 text-left border-b border 
    max-[375px]:border-none bg-neutral-100`,
    td: "max-[375px]:border-b max-[375px]:border-gray-300",
  };

  return (
    <tr className={`${css.wrapper}`}>
      <th className={`${css.thEtd} ${css.th}`}>{type}</th>
      <td className={`${css.thEtd} ${css.td}`}>{value}</td>
    </tr>
  );
};




