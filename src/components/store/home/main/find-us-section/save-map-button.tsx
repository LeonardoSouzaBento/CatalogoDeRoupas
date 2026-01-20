// import { BoolSetter } from "@/types/types";
import SaveButton from '@/app/_ui/SaveButton';

const SaveMapButton = ({ Value }: { Value: string }) => {
  async function handleSave() {
    console.log(Value);
  }
  return <SaveButton text="Salvar mapa" Function={handleSave} />;
};

export default SaveMapButton;
