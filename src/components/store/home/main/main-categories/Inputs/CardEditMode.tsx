import BackButton from '@/app/_ui/back-button';
import SaveButton from '@/app/_ui/SaveButton';
import { Input } from '@/components/ui';
import { BooleanSetter, MainCategory } from '@/types/types';
import { Upload } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const css = {
  wrapperCardCat: `sm:w-[calc(50%-9px)] sm:min-h-100 flex flex-col justify-center gap-4 bs
p-5 rounded-none hover:shadow-lg fast-trans`,
  wrapper: `flex flex-col gap-3 mb-px`,
  wrapperImg: 'rounded-none flex flex-wrap i-center gap-4 relative mb-px',
  imghomeEditMode: 'grayscale opacity-70',
  label: 'font-medium !text-neutral-800 leading-none mb-0',
  u: 'font-normal',
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
      console.log('Sim');
    }
  }, [catUpdated]);

  return (
    <div className={`${css.wrapperCardCat}`}>
      <div className={`${css.wrapper}`}>
        <label className={`${css.label}`} htmlFor={category.name}>
          1 - Nome da categoria:
        </label>
        <Input
          type="text"
          id={category.name}
          name={category.name}
          placeholder="Digite aqui"
          className="mb-1"
        />
      </div>

      <div>
        <label>2 - Imagem</label>
        <div className={`${css.wrapperImg}`}>
          <div>
            <Image
              src={category.urlImg}
              alt={category.alt}
              className={`${css.imghomeEditMode}`}
              height={144}
              width={104}
            />
          </div>
          <button className="mb-1  min-[440px]:mb-0 sm:mb-1 md:mb-0">
            <div className="h-full min-w-8 flex-center">
              <Upload  />
            </div>
            Nova Imagem
          </button>
        </div>
      </div>

      <div className={`${css.wrapper} mb-1!`}>
        <label className={`${css.label}`} htmlFor={`${category.order}`}>
          3 - Ordem de posição na grade:
        </label>
        <Input
          type="number"
          name={`${category.order}`}
          id={`${category.order}`}
          placeholder="Digite aqui"
        />
      </div>
      <SaveButton text="salvar alterações" Function={handleSaveCat} styles="mb-1" />
      <BackButton setState={setCardEditMode} />
    </div>
  );
};

export default CardEditMode;
