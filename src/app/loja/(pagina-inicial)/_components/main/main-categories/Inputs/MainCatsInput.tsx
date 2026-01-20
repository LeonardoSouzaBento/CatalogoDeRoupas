import React, { useState, useContext } from 'react';
import { HomeContext } from '@/contexts/HomeContext';
import CategoryCard from './CategoryCard';
import { iconMd } from '@/css/lucideIconStyles';
import { Eye, EyeClosed, Plus } from 'lucide-react';
import { AlertInfo } from '@/app/_ui';

const css = {
  wrapper: 'pb-0',
  wrapperUserGenders: 'flex flex-col mb-5 gap-3 sm:flex-row ',
  buttonGender: 'button w-full sm:max-w-80 max-[350px]:!leading-4 ',
  wrapperCardCats: 'flex flex-col flex-wrap gap-4 sm:flex-row sm:justify-center mb-5',
  wrapperImg: 'h-40 w-30',
  img: 'size-full object-cover',
  icon: iconMd,
};

const MainCats = (): React.ReactElement => {
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
          {maleNoSelected ? <EyeClosed {...iconMd} /> : <Eye {...iconMd} />}
          Ver Categorias Masculinas
        </button>
        <button
          className={`${css.buttonGender} ${femaleNoSelected}`}
          onClick={() => {
            if (selectedGender !== 'feminino') {
              setSelectedGender('feminino');
            }
          }}>
          {femaleNoSelected ? <EyeClosed {...iconMd} /> : <Eye {...iconMd} />}
          Ver Categorias Femininas
        </button>
      </div>
      <div className={`${css.wrapperCardCats}`}>
        {selectedMainCategories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
      <AlertInfo
        text={`Prefira definir um número par de categorias para evitar 
        espaços vazios no site que é visto no tablet ou no computador, pois nesses dispositivos as categorias ficam dispostas numa grade de duas colunas.`}
      />
      <button className="mb-5">
        Adicionar Nova Categoria Principal
        <Plus {...iconMd} />
      </button>
    </div>
  );
};

export default MainCats;
