import React from "react";
import MeasureItem from "./MeasureItem";
import { iconMdStyles, iconSmStyles } from "@/app/lucideIconStyles";
import type { Measure } from "./MeasureItem";
import { Pen, CircleQuestionMark } from "lucide-react";
import AlertInfo from "@ui/AlertInfo";
import HeaderCard from "@ui/HeaderCard";
import { UserData } from "@/types/types";

// const shirtSizes = ["PP", "P", "M", "G", "GG", "GGG"];

const css = {
  wrapper: `w-auto flex flex-wrap max-[375px]:flex-col max-[375px]:!border-b-0 bs !border-r-0 mb-5 br-0`,
};

const MeasuresCard = ({ userData }: { userData: UserData }) => {
  const measuresData: Measure[] = [
    { type: "Camisa", value: userData.camisa },
    { type: "Calça", value: userData.calça },
    { type: "Calçado", value: userData.calçado },
  ];

  return (
    <>
      <HeaderCard title="Minhas Medidas" icon="square_foot" />
      <AlertInfo text="Definir suas medidas é importante para mostrarmos roupas preferencialmente do seu tamanho" />
      <div className={`${css.wrapper}`}>
        {measuresData.map((measure, index) => (
          <MeasureItem key={index} {...measure} />
        ))}
      </div>
      <button className="button max-[375px]:text-left mb-5 w-full">
        <CircleQuestionMark {...iconMdStyles} /> Ver Guia De Medidas
      </button>
      <button className="button max-[375px]:text-left w-full">
        <Pen {...iconSmStyles} /> Atualizar Minhas Medidas
      </button>
    </>
  );
};

export default MeasuresCard;
