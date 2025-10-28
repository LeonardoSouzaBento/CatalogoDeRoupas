import React from "react";
import {
  iconSmStyles,
  iconXlStyles
} from "@/app/lucideIconStyles";
import { CloudUpload, X } from "lucide-react";

const css = {
  wrapper: `size-full centralize gap-2 abso p-4 bg-white/86 z-2`,
  wrapperButtons: "flex items-end flex-col justify-center gap-1",
  button: `flex flex-col items-center gap-2 p-4 box-border bg-gray-100 normal-button-sizes font-medium rounded-none !leading-5 text-gray-800 capitalize rounded-sm hover:bg-gray-200 fast-trans`,
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
          className={`close-button`}
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
