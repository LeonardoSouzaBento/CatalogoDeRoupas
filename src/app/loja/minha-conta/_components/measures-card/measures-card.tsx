import React from 'react';
import MeasureItem from './measure-item';
import { iconMd, iconSm } from '@/css/lucideIconStyles';
import type { Measure } from './measure-item';
import { Pen, CircleQuestionMark } from 'lucide-react';
import AlertInfo from '@/app/_ui/alert-info';
import HeaderCard from '@/app/_ui/HeaderCard';
import { UserData } from '@/types/types';

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
        <CircleQuestionMark  />
        Ver Guia De Medidas
      </button>
      <button className="button max-[375px]:text-left w-full">
        <Pen  /> Atualizar Minhas Medidas
      </button>
    </>
  );
};

export default MeasuresCard;
