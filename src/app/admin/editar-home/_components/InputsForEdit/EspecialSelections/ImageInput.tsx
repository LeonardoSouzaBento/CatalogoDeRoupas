import React from "react";
import { CloudUpload, X } from "lucide-react";
import {
  iconXlStyles,
  iconSmStyles,
  imageUploadNameButton,
  buttonClose,
} from "@src/data/styles";

const css = {
  wrapper: `size-full centralize gap-2 abso p-4 bg-white/86 z-2`,
  wrapperButtons: "flex items-end flex-col justify-center gap-1",
  button: `${imageUploadNameButton}`,
};

const ImageInput = ({
  setSeeInput,
  mainImage = true,
}: {
  setSeeInput: React.Dispatch<React.SetStateAction<boolean>>;
  mainImage?: boolean;
}): React.ReactElement => {
  function uploadImage() {
    if (mainImage) {
      console.log("");
    } else {
      console.log("");
    }
  }

  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.wrapperButtons}`}>
        <button
          className={`${buttonClose}`}
          onClick={() => {
            setSeeInput(false);
          }}
        >
          <X {...iconSmStyles} />
        </button>
        <button onClick={uploadImage} className={`${css.button}`}>
          <CloudUpload {...iconXlStyles} />
          Inserir uma nova imagem
        </button>
      </div>
    </div>
  );
};

export default ImageInput;
