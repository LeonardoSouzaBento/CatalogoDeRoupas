"use client"
import { iconMdStyles } from "@/app/lucideIconStyles";
import { CheckLine, CircleCheckBig } from "lucide-react";

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
      className={`w-full gap-2 ${styles}`}
    >
      <div className={`w-8 h-full relative centralize`}>
        <CircleCheckBig {...iconMdStyles} />
      </div>
      {text}
    </button>
  );
};

export default SaveButton;
