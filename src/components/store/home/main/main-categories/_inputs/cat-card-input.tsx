import { Button, Icon } from "@/components/ui";
import type { MainCategory } from "@/types/types";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { CardEditMode } from "./card-edit-mode";

const css = {
  wrapperCardCat: `sm:w-[calc(50%-9px)] flex flex-col gap-3 p-5 rounded-md border border-border/75 fast-trans`,
  wrapperImg: "w-36 aspect-3/4 rounded-none flex-center relative rounded-sm crop",
  img: "size-full object-cover",
  imghomeEditMode: "grayscale opacity-70",
  label: "text-muted-foreground leading-none mb-0 rounded-sm",
  strong: "rounded-sm max-w-max",
  button: "button w-full !justify-center",
};

interface CatCardResultProps {
  category: MainCategory;
}

const CatCardInput = ({ category }: CatCardResultProps) => {
  const [cardEditMode, setCardEditMode] = useState<boolean>(false);

  return (
    <>
      {!cardEditMode ? (
        <div className={`${css.wrapperCardCat}`}>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex flex-col justify-center gap-3.5">
              <p className={`${css.label}`}>
                <span>Nome da categoria:</span>{" "}
                <strong className={`${css.strong}`}>{category.name}</strong>
              </p>
              <p className={`${css.label}`}>
                <span>Posição na grade:</span>{" "}
                <strong className={`${css.strong}`}>{category.order + 1}ª</strong>
              </p>
            </div>
            <div>
              <p className={`${css.label} border-0 pb-3`}>Imagem de capa:</p>
              <div
                className={`${css.wrapperImg}`}
              >
                <Image
                  src={category.urlImg}
                  alt={category.alt}
                  className={`${css.img} ${cardEditMode && css.imghomeEditMode}`}
                  fill
                />
              </div>
            </div>
          </div>
          <Button
            variant={"outline"}
            onClick={() => {
              setCardEditMode(true);
            }}
          >
            <Icon Svg={Pencil} />
            Editar Categoria
          </Button>
        </div>
      ) : (
        <CardEditMode category={category} setCardEditMode={setCardEditMode} />
      )}
    </>
  );
};

export { CatCardInput };
