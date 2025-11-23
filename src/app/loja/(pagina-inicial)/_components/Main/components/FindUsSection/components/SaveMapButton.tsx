// import { BoolSetter } from "@/types/types";
import SaveButton from "@/app/loja/_ui/SaveButton";

const SaveMapButton = ({ inputValue } : { inputValue: string }) => {
  async function handleSave() {
    console.log(inputValue);
  }
  return (
    <SaveButton text="Salvar mapa" Function={handleSave}/>
  );
};

export default SaveMapButton;
