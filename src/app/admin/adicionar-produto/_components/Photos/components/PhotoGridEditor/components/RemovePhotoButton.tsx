import { iconSm } from '@/css/lucideIconStyles';
import { X } from 'lucide-react';

const css = {
  button: `size-9 absolute top-1 right-1 p-0 flex-center bg-white/88 hover:bg-white trans z-2 
  shadow-sm br-50`,
};

const RemovePhotoButton = () => {
  return (
    <>
      <button className={`${css.button}`}>
        <X {...iconSm} />
      </button>
    </>
  );
};

export default RemovePhotoButton;
