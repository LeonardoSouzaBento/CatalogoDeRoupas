import { useState, useEffect } from "react";
import type { MainCategory } from "@src/types/types";
import { Pen, Check, Upload } from "lucide-react";
import { iconSmStyles, iconMdStyles, inputClasses } from "@src/data/styles";

const css = {
  wrapperCardCat: `sm:w-[49%] sm:max-w-[49%] sm:min-h-100 flex flex-col justify-center gap-2 normal-border 
     sm:!border-gray-200 p-4 rounded-none hover:shadow-lg fast-trans`,
  wrapperImg: "h-46 w-34 mb-2 rounded-none relative",
  wrapperImgNoEditMode: "border-b-2 border-neutral-700",
  img: "size-full object-cover",
  imgEditMode: "grayscale",
  p: "font-p font-medium !text-neutral-800",
  u: "font-normal",
  button: "base-button-light w-full !justify-center",
  buttonImg: `flex flex-col items-center size-full gap-2 p-3 abso box-border px-4 bg-neutral-100/70 normal-button-sizes 
    font-medium rounded-none !leading-5 text-gray-800`,
};

interface CatCardResultProps {
  category: MainCategory;
}

const CategoryCardResume = ({ category }: CatCardResultProps) => {
  const [seeCardEditMode, setSeeCardEditMode] = useState<boolean>(false);
  const [catUpdated, setCatUpdated] = useState<boolean>(false);

  function handleSaveCat() {
    setCatUpdated(true);
  }

  useEffect(() => {
    if (catUpdated) {
      console.log("Sim");
    }
  }, [catUpdated]);

  return (
    <div className={`${css.wrapperCardCat}`}>
      {!seeCardEditMode ? (
        <p className={`${css.p}`}>
          Nome da categoria: <u className={`${css.u}`}>{category.name}</u>
        </p>
      ) : (
        <>
          <label className={`${css.p}`} htmlFor={category.name}>
            Nome da categoria:
          </label>
          <input
            type="text"
            className={`${inputClasses} !mb-0`}
            id={category.name}
            name={category.name}
            placeholder="Digite aqui"
          />
        </>
      )}
      <p className={`${css.p}`}>Imagem de capa:</p>
      <div
        className={`${css.wrapperImg} ${
          !seeCardEditMode && css.wrapperImgNoEditMode
        }`}
      >
        <img
          src={category.urlImg}
          alt={category.alt}
          className={`${css.img} ${seeCardEditMode && css.imgEditMode}`}
        />
        {seeCardEditMode && (
          <button className={`${css.buttonImg}`}>
            Carregar Nova Imagem
            <Upload {...iconMdStyles} />
          </button>
        )}
      </div>

      {!seeCardEditMode ? (
        <p className={`${css.p}`}>
          Ordem de posição na grade:{" "}
          <u className={`${css.u}`}>{category.order}</u>
        </p>
      ) : (
        <>
          <label className={`${css.p}`} htmlFor={`${category.order}`}>
            Ordem de posição na grade:
          </label>
          <input
            type="number"
            name={`${category.order}`}
            id={`${category.order}`}
            className={`${inputClasses} !mb-2`}
            placeholder="Digite aqui"
          />
        </>
      )}

      {!seeCardEditMode ? (
        <button
          className={`${css.button}`}
          onClick={() => {
            setSeeCardEditMode(true);
          }}
        >
          Editar Categoria
          <Pen {...iconSmStyles} />
        </button>
      ) : (
        <>
          <button className={`${css.button} mb-1`} onClick={handleSaveCat}>
            Salvar Alterações
            <Check {...iconMdStyles} />
          </button>
          <button
            className={`${css.button}`}
            onClick={() => {
              setSeeCardEditMode(false);
            }}
          >
            Voltar
          </button>
        </>
      )}
    </div>
  );
};

export default CategoryCardResume;
