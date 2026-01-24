import { BooleanSetter, Photo, StateSetter } from '@/types/types';
import { Check, X } from 'lucide-react';
import Image from 'next/image';

const css = {
  container: `size-full abso flex-center z-4 bg-black/1`,
  wrapper: `size-auto p-6 pb-6.7 bg-md bg-white shadow-lg-hover round-xl`,
  wrapperButtons: `flex flex-col gap-5`,
  button: `j-center round-lg`,
};

interface Props {
  setSeeRemoveConfirm: BooleanSetter;
  photo?: Photo | null;
  setPhotos: StateSetter<Photo[]>;
  setPhotoTaken: StateSetter<Photo | null>;
}

export const RemoveConfirm = ({ setSeeRemoveConfirm, photo, setPhotos, setPhotoTaken }: Props) => {
  function handleRemovePhoto() {
    if (!photo) return;

    setPhotos((prev) => {
      const updated = [...prev];
      const index = updated.findIndex((p) => p.id === photo.id);
      if (index === -1) return prev;
      const oldUrl = updated[index].url;

      // limpa blob
      if (oldUrl.startsWith('blob:')) {
        URL.revokeObjectURL(oldUrl);
      }
      // mais de 3 itens → remover
      if (updated.length > 3) {
        const oldUrl = updated[index].url;

        if (oldUrl.startsWith('blob:')) {
          URL.revokeObjectURL(oldUrl);
        }
        updated.splice(index, 1);
        return updated;
      }

      updated[index] = {
        ...updated[index],
        url: '',
      };

      return updated;
    });
    setSeeRemoveConfirm(false);
  }

  return (
    <div className={`${css.container}`}>
      <div className={`${css.wrapper}`}>
        <p className={`font-semibold tracking-normal mb-3 -mt-1`}>Remover esta imagem ?</p>

        <div className={`w-max`}>
          <div className={`w-full h-auto flex justify-center relative mb-5`}>
            <Image
              src={photo?.url || '/home'}
              height={220}
              width={220}
              alt=""
              className={`bg-gray-50 object-cover`}
            />
          </div>

          <div className={`${css.wrapperButtons}`}>
            <button
              className={`${css.button} `}
              onClick={(e) => {
                e.stopPropagation();
                setPhotoTaken(null);
                setSeeRemoveConfirm(false);
              }}>
              Não
              <X strokeWidth={2} />
            </button>
            <button
              className={`${css.button}  `}
              onClick={(e) => {
                e.stopPropagation();
                handleRemovePhoto();
              }}>
              Sim, remover
              <Check strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
