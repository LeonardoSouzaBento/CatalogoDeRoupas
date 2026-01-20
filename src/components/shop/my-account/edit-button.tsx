import { iconMd } from '@/css/lucideIconStyles';
import { BooleanSetter } from '@/types/types';
import { Pen } from 'lucide-react';

const EditButton = ({ setSeeEditMode }: { setSeeEditMode: BooleanSetter }) => {
  return (
    <div className="h-16 w-auto flex items-center mb-1 br-0">
      <button
        className=" p-0 br-md "
        onClick={() => {
          setSeeEditMode(true);
        }}>
        <Pen {...iconMd} />
      </button>
    </div>
  );
};

export default EditButton;
