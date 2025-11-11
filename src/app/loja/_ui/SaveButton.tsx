"use client"
import { iconMdStyles } from "@/app/lucideIconStyles";
import { CircleCheckBig } from "lucide-react";

interface Props {
  text?: string;
  styles?: string;
  defaultFunction?: () => void;
  asyncFunction?: () => Promise<void>;
}

const SaveButton = ({
  text = "Salvar",
  styles,
  defaultFunction,
  asyncFunction,
}: Props) => {
  return (
    <button
      onClick={defaultFunction || asyncFunction}
      className={`w-full ${styles}`}
    >
      <div className={`wrapper-icon relative`}>
        <CircleCheckBig {...iconMdStyles} />
      </div>
      {text}
    </button>
  );
};

export default SaveButton;
