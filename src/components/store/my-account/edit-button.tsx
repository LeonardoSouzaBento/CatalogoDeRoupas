import { BooleanSetter } from '@/types/types';
import { Pen } from 'lucide-react';

const EditButton = ({ setSeeEditMode }: { setSeeEditMode: BooleanSetter }) => {
  return (
    <div className="h-16 w-auto flex items-center mb-1 round-none">
      <button
        className=" p-0 round-md "
        onClick={() => {
          setSeeEditMode(true);
        }}>
        <Pen />
      </button>
    </div>
  );
};

export { EditButton };
