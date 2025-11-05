import Buttons from "./components/ImageButtons/Buttons";
import Images from "./components/ImageButtons/Images";
import InfoForm from "./components/InfoForm";


const ProductInput = ({ id }: { id: number | string}) => {
  return (
    <div className="w-full bg-white relative p-6 br-lg">
      <Buttons />
      <Images />
      <InfoForm id={id} />
    </div>
  );
};

export default ProductInput;
