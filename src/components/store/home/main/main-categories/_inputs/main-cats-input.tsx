import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { HomeContext } from '@/contexts/homeContext';
import { MainCategory } from '@/types/types';
import { Eye, EyeClosed, Plus } from 'lucide-react';
import React, { useContext, useState } from 'react';
import CategoryCard from './category-card';

const css = {
  wrapper: 'pb-0',
  wrapperUserGenders: 'flex flex-col mb-5 gap-3 sm:flex-row ',
  buttonGender: 'button w-full sm:max-w-80 max-[350px]:!leading-4 ',
  wrapperCardCats: 'flex flex-col flex-wrap gap-4 sm:flex-row sm:justify-center mb-5',
  wrapperImg: 'h-40 w-30',
  img: 'size-full object-cover',
};

export const MainCatsInput = (): React.ReactElement => {
  const { mainCategories } = useContext(HomeContext);
  const [selectedGender, setSelectedGender] = useState<string>('masculino');
  const selectedMainCategories =
    selectedGender === 'masculino' ? mainCategories.masculino : mainCategories.feminino;
  const maleNoSelected = selectedGender !== 'masculino' ? '!bg-gray-50' : '';
  const femaleNoSelected = selectedGender !== 'feminino' ? '!bg-gray-50' : '';

  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.wrapperUserGenders} justify-start`}>
        <button
          className={`${css.buttonGender} ${maleNoSelected}`}
          onClick={() => {
            if (selectedGender !== 'masculino') {
              setSelectedGender('masculino');
            }
          }}>
          {maleNoSelected ? <EyeClosed /> : <Eye />}
          Ver Categorias Masculinas
        </button>
        <button
          className={`${css.buttonGender} ${femaleNoSelected}`}
          onClick={() => {
            if (selectedGender !== 'feminino') {
              setSelectedGender('feminino');
            }
          }}>
          {femaleNoSelected ? <EyeClosed /> : <Eye />}
          Ver Categorias Femininas
        </button>
      </div>
      <div className={`${css.wrapperCardCats}`}>
        {selectedMainCategories.map((category: MainCategory, index: number) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
      <Alert variant="destructive">
        <AlertCircle />
        <AlertDescription>
          Prefira definir um número par de categorias para evitar espaços vazios no site que é visto
          no tablet ou no computador, pois nesses dispositivos as categorias ficam dispostas numa
          grade de duas colunas.
        </AlertDescription>
      </Alert>
      <button className="mb-5">
        Adicionar Nova Categoria Principal
        <Plus />
      </button>
    </div>
  );
};
