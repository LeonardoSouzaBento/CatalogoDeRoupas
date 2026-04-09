import { Button, ButtonsWrapper, Icon } from "@/components/ui";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useHomeContext } from "@/contexts/index";
import type { Gender } from "@/types/types";
import { genders, MainCategory } from "@/types/types";
import { AlertCircle, Eye, EyeClosed, Plus } from "lucide-react";
import React, { useState } from "react";
import { CatCardInput } from "./cat-card-input";

const css = {
  wrapperCardCats:
    "flex flex-col flex-wrap gap-4 sm:flex-row sm:justify-center mb-5",
  wrapperImg: "h-40 w-30",
  img: "size-full object-cover",
};

export const MainCatsInput = (): React.ReactElement => {
  const { mainCategories } = useHomeContext();
  const [selectedGender, setSelectedGender] = useState<string>("masculino");
  const selectedMainCategories =
    selectedGender === "masculino"
      ? mainCategories.masculino
      : mainCategories.feminino;

  return (
    <div className="space-y-4.5">
      <ButtonsWrapper>
        {genders.map((gender: Gender) => (
          <Button
            key={gender}
            variant="ghost"
            data-option
            selected={selectedGender === gender}
            size={"default"}
            onClick={() => {
              if (selectedGender !== gender) {
                setSelectedGender(gender);
              }
            }}
          >
            <Icon Svg={selectedGender === gender ? Eye : EyeClosed} />
            Ver Categorias {gender.replace("o", "as")}
          </Button>
        ))}
      </ButtonsWrapper>
      <div className={`${css.wrapperCardCats}`}>
        {selectedMainCategories.map((category: MainCategory, index: number) => (
          <CatCardInput key={index} category={category} />
        ))}
      </div>
      <Alert variant="destructive">
        <Icon Svg={AlertCircle} />
        <AlertTitle>Atenção</AlertTitle>
        <AlertDescription>
          <p>
            Prefira cadastrar um <strong>número par</strong> de categorias para
            evitar espaços vazios no site que é visto no tablet ou no
            computador, pois nesses dispositivos as categorias ficam dispostas
            numa grade de duas colunas.
          </p>
        </AlertDescription>
      </Alert>
      <Button>
        <Icon Svg={Plus} size="lg" />
        Adicionar Nova Categoria Principal
      </Button>
    </div>
  );
};
