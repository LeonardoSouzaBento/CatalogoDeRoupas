"use client";
import { iconSm } from "@/app/lucideIconStyles";
import { BooleanSetter } from "@/types/types";
import { CornerUpLeft } from "lucide-react";

interface Props {
  styles?: string;
  setState?: BooleanSetter;
}

const BackButton = ({ styles, setState = () => {} }: Props) => {
  return (
    <button
      onClick={() => {
        setState(false);
      }}
      className={`w-full ${styles}`}
    >
      voltar
      <CornerUpLeft {...iconSm} />
    </button>
  );
};

export default BackButton;
