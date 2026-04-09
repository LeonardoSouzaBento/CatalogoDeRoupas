import { Icon, Input, InputWrapper, Label } from "@/components/ui";
import { BackButton } from "@/components/ui/back-button";
import { Button } from "@/components/ui/button";
import type { BooleanSetter, MainCategory } from "@/types/types";
import { Check, Upload } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const css = {
  wrapperCardCat: `sm:w-[calc(50%-9px)] sm:min-h-100 flex flex-col justify-center gap-4 border border-border/75
p-5 hover:shadow-lg fast-trans rounded-md`,
  wrapperImg: "rounded-none flex flex-wrap items-center gap-4 relative mb-px",
  imghomeEditMode: "grayscale opacity-70 aspect-3/4",
  u: "font-normal",
};

const CardEditMode = ({
  setCardEditMode,
  category,
}: {
  setCardEditMode: BooleanSetter;
  category: MainCategory;
}) => {
  const [catUpdated, setCatUpdated] = useState<boolean>(false);

  async function handleSaveCat() {
    setCatUpdated(true);
  }

  useEffect(() => {
    if (catUpdated) {
      console.log("Sim");
    }
  }, [catUpdated]);

  return (
    <div className={`${css.wrapperCardCat}`}>
      <InputWrapper>
        <Label htmlFor={category.name}>1 - Nome da categoria:</Label>
        <Input
          type="text"
          id={category.name}
          name={category.name}
          placeholder="Digite aqui"
          className="mb-1"
        />
      </InputWrapper>

      <div className="space-y-2">
        <Label>2 - Imagem</Label>
        <div className={`${css.wrapperImg}`}>
          <div className="relative w-36 aspect-3/4 rounded-sm crop">
            <Image
              src={category.urlImg}
              alt={category.alt}
              fill
              className={`${css.imghomeEditMode}`}
            />
          </div>
          <Button
            variant="outline"
            className="mb-px min-[440px]:mb-0 sm:mb-px md:mb-0"
          >
            <Upload size={18} />
            Nova Imagem
          </Button>
        </div>
      </div>

      <InputWrapper className="pt-1">
        <Label htmlFor={`${category.order}`}>
          3 - Ordem de posição na grade:
        </Label>
        <Input
          type="number"
          name={`${category.order}`}
          id={`${category.order}`}
          placeholder="Digite aqui"
        />
      </InputWrapper>

      <div className="flex flex-col gap-3 mt-1.5">
        <Button onClick={handleSaveCat} className="w-full">
          <Icon Svg={Check} size="md" />
          salvar alterações
        </Button>
        <BackButton setState={setCardEditMode} />
      </div>
    </div>
  );
};

export { CardEditMode };
