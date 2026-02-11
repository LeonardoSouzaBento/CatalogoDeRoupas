import type { MainCategory } from '@/types/types';
import { Pen } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { CardEditMode } from './_inputs/card-edit-mode';
import { Button, Icon } from '@/components/ui';

const css = {
  wrapperCardCat: `sm:w-[calc(50%-9px)] flex flex-col justify-center gap-4 border
  border-gray-100 p-5 rounded-none hover:shadow-lg fast-trans`,
  wrapperImg: 'h-36 w-26 rounded-none flex-center relative',
  wrapperImgNohomeEditMode: 'border-b-2 border-neutral-700',
  img: 'size-full object-cover',
  imghomeEditMode: 'grayscale opacity-70',
  label: 'font-medium !text-neutral-800 leading-none mb-0',
  u: 'font-normal',
};

interface CatCardResultProps {
  category: MainCategory;
}

const CategoryCard = ({ category }: CatCardResultProps) => {
  const [cardEditMode, setCardEditMode] = useState<boolean>(false);

  return (
    <>
      {!cardEditMode ? (
        <div className={`${css.wrapperCardCat}`}>
          <p className={`${css.label}`}>
            Nome da categoria: <u className={`${css.u}`}>{category.name}</u>
          </p>
          <p className={`${css.label}`}>Imagem de capa:</p>
          <div className={`${css.wrapperImg} ${!cardEditMode && css.wrapperImgNohomeEditMode}`}>
            <Image
              src={category.urlImg}
              alt={category.alt}
              className={`${css.img} ${cardEditMode && css.imghomeEditMode}`}
              fill
            />
          </div>
          <p className={`${css.label}`}>
            Ordem de posição na grade: <u className={`${css.u}`}>{category.order}</u>
          </p>
          <Button
            data-w-full
            onClick={() => {
              setCardEditMode(true);
            }}>
            Editar Categoria
            <Icon LucideIcon={Pen} />
          </Button>
        </div>
      ) : (
        <CardEditMode category={category} setCardEditMode={setCardEditMode} />
      )}
    </>
  );
};

export { CategoryCard };
