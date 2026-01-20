import Buttons from "./Buttons";
import Images from "./Images";
import InfoForm from "./InfoForm";


const Product = ({ id }: { id: number | string}) => {
  return (
    <div className="w-full bg-white relative p-6 br-lg">
      <Buttons />
      <Images />
      <InfoForm id={id} />
    </div>
  );
};

export default Product;
