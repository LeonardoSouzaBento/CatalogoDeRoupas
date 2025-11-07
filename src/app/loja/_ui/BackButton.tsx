"use client"
import React from "react";
import { BooleanSetter } from "@/types/types";

interface Props {
  styles?: string;
  setState? : BooleanSetter;
}

const BackButton = ({
  styles,
  setState = ()=>{},
}: Props) => {
  return (
    <button
      onClick={()=>{setState(false)}}
      className={`w-full ${styles}`}
    >
      voltar
    </button>
  );
};

export default BackButton;
