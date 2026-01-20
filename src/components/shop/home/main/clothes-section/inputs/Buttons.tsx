import { iconMd } from '@/css/lucideIconStyles';
import { CloudUpload } from 'lucide-react';

const css = {
  wrapperButtons: `size-full flex flex-col gap-5 pb-5 bg-white/86 z-2`,
  button: `min-w-full max-w-none j-center`,
  wrapperIcon: 'h-10 min-w-10 flex-center',
};

const Buttons = ({ mainImage = true }: { mainImage?: boolean }) => {
  function uploadImage() {
    if (mainImage) {
      console.log('');
    } else {
      console.log('');
    }
  }
  return (
    <div className={`${css.wrapperButtons}`}>
      <button onClick={uploadImage} className={`${css.button}`}>
        Subir imagem menor
        <div className={`${css.wrapperIcon}`}>
          <CloudUpload {...iconMd} />
        </div>
      </button>
      <button onClick={uploadImage} className={`${css.button}`}>
        Subir imagem principal
        <div className={`${css.wrapperIcon}`}>
          <CloudUpload {...iconMd} />
        </div>
      </button>
    </div>
  );
};

export default Buttons;
