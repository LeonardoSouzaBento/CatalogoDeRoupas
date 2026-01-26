import { X } from 'lucide-react';

const css = {
  button: `size-9 absolute top-1 right-1 p-0 flex-center bg-white/88 hover:bg-white default-transition z-2 
  shadow-sm rounded-full`,
};

export const RemovePhotoButton = () => {
  return (
    <>
      <button className={`${css.button}`}>
        <X />
      </button>
    </>
  );
};
