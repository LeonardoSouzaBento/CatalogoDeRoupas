import React from "react";
import MeasureItem from "./MeasureItem";
import { iconMdStyles, iconSmStyles } from "@/data/styles";
import type { Measure } from "./MeasureItem";
import { Pen, CircleQuestionMark } from "lucide-react";
import AlertInfo from "@ui/AlertInfo";

// const shirtSizes = ["PP", "P", "M", "G", "GG", "GGG"];


const measuresData: Measure[] = [
  { type: "Camisa", value: "M" },
  { type: "Calça", value: "40" },
  { type: "Calçado", value: "40" },
];

const css = {
  wrapper: `w-auto flex flex-wrap max-[375px]:flex-col max-[375px]:!border-b-0 bs !border-r-0 mb-4`,
};

const MeasuresCard = () => {
  return (
    <>
      <AlertInfo text="Definir suas medidas é importante para mostrarmos roupas preferencialmente do seu tamanho" />
      <div className={`${css.wrapper}`}>
        {measuresData.map((measure, index) => (
          <MeasureItem key={index} {...measure} />
        ))}
      </div>
      <button className="button max-[375px]:text-left mb-4 w-full">
        <CircleQuestionMark {...iconMdStyles} /> Ver Guia De Medidas
      </button>
      <button className="button max-[375px]:text-left w-full">
        <Pen {...iconSmStyles} /> Atualizar Minhas Medidas
      </button>
    </>
  );
};

export default MeasuresCard;
