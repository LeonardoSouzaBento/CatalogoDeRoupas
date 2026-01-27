import { Button, ButtonsWrapper } from '@/components/ui';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { HomeContext } from '@/contexts/homeContext_';
import type { Gender } from '@/types/types';
import { genders, MainCategory } from '@/types/types';
import { AlertCircle, Eye, EyeClosed, Plus } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { CatCardInput } from './cat-card-input';

const css = {
  wrapperCardCats: 'flex flex-col flex-wrap gap-4 sm:flex-row sm:justify-center mb-5',
  wrapperImg: 'h-40 w-30',
  img: 'size-full object-cover',
};

export const MainCatsInput = (): React.ReactElement => {
  const { mainCategories } = useContext(HomeContext);
  const [selectedGender, setSelectedGender] = useState<string>('masculino');
  const selectedMainCategories =
    selectedGender === 'masculino' ? mainCategories.masculino : mainCategories.feminino;

  return (
    <div className="space-y-4">
      <ButtonsWrapper>
        {genders.map((gender: Gender) => (
          <Button
            key={gender}
            variant="ghost"
            size={'ghost'}
            onClick={() => {
              if (selectedGender !== gender) {
                setSelectedGender(gender);
              }
            }}>
            {selectedGender === gender ? <EyeClosed /> : <Eye />}
            Ver Categorias {gender}
          </Button>
        ))}
      </ButtonsWrapper>
      <div className={`${css.wrapperCardCats}`}>
        {selectedMainCategories.map((category: MainCategory, index: number) => (
          <CatCardInput key={index} category={category} />
        ))}
      </div>
      <Alert variant="destructive">
        <AlertCircle />
        <AlertDescription>
          <p>
            Prefira definir um <strong>número par</strong> de categorias para evitar espaços vazios
            no site que é visto no tablet ou no computador, pois nesses dispositivos as categorias
            ficam dispostas numa grade de duas colunas.
          </p>
        </AlertDescription>
      </Alert>
      <Button className="mb-5">
        Adicionar Nova Categoria Principal
        <Plus />
      </Button>
    </div>
  );
};
