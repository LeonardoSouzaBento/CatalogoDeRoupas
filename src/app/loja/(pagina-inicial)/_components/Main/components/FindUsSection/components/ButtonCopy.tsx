import { BoolSetter } from "@/types/types";
import { iconMdStyles } from "@/app/styles";
import { Check, CheckCheck } from "lucide-react";

interface ButtonCopyProps {
  state: boolean;
  setState: BoolSetter;
  firstText: string;
  textToCopy: string;
}

const css = { button: "button min-w-max" };

const ButtonCopy = ({
  state,
  setState,
  firstText,
  textToCopy,
}: ButtonCopyProps) => {

  function handleClickCopy() {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setState(true);
        setTimeout(() => setState(false), 2800);
      })
      .catch(console.error);
  }

  return (
    <button
      className={`${css.button}`}
      onClick={handleClickCopy}
    >
      {!state ? firstText : "Copiado!"}
      {!state ? <Check {...iconMdStyles} /> : <CheckCheck {...iconMdStyles} />}
    </button>
  );
};

export default ButtonCopy;
