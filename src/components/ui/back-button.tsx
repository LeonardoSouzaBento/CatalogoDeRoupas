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
      onClick={() => {
        setState(false);
      }}
      className={styles}
    >
      voltar
      <Icon Svg={CornerUpLeft} />
    </Button>
  );
};

export { BackButton };
