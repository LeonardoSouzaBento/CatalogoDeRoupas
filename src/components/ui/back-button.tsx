import type { BooleanSetter } from "@/types/types";
import { Button, Icon } from "@/components/ui";
import { CornerUpLeft } from "lucide-react";

interface Props {
  styles?: string;
  setState?: BooleanSetter;
}

const BackButton = ({ styles, setState = () => {} }: Props) => {
  return (
    <Button
      variant={"ghost"}
      onClick={() => {
        setState(false);
      }}
      className={styles}
    >
      <Icon Svg={CornerUpLeft} size="sm" strokeWidth="medium"/>
      voltar
    </Button>
  );
};

export { BackButton };
