import { Buttons } from './buttons_';
import { Images } from './images_';
import { InfoForm } from './info-form';

const ProductInput = ({ id }: { id: number | string }) => {
  return (
    <div className="w-full bg-white relative p-6 rounded-lg">
      <Buttons />
      <Images />
      <InfoForm id={id} />
    </div>
  );
};

export { ProductInput };
