import { Input, InputWrapper, Label } from '@/components/ui';
import { BackButton } from '@/components/ui/back-button';
import { Button } from '@/components/ui/button';
import type { BooleanSetter, MainCategory } from '@/types/types';
import { CircleCheckBig, Upload } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const css = {
  wrapperCardCat: `sm:w-[calc(50%-9px)] sm:min-h-100 flex flex-col justify-center gap-4 border
p-5 rounded-none hover:shadow-lg fast-trans`,
  wrapper: `flex flex-col gap-3 mb-px`,
  wrapperImg: 'rounded-none flex flex-wrap i-center gap-4 relative mb-px',
  imghomeEditMode: 'grayscale opacity-70',
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
      <InputWrapper className={`${css.wrapper}`}>
        <Label htmlFor={category.name}>1 - Nome da categoria:</Label>
        <Input
          type="text"
          id={category.name}
          name={category.name}
          placeholder="Digite aqui"
          className="mb-1"
        />
      </InputWrapper>

      <div>
        <Label>2 - Imagem</Label>
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
          <Button variant="outline" className="mb-px min-[440px]:mb-0 sm:mb-px md:mb-0">
            <Upload size={18} />
            Nova Imagem
          </Button>
        </div>
      </div>

      <InputWrapper>
        <Label htmlFor={`${category.order}`}>3 - Ordem de posição na grade:</Label>
        <Input
          type="number"
          name={`${category.order}`}
          id={`${category.order}`}
          placeholder="Digite aqui"
        />
      </InputWrapper>
      <Button onClick={handleSaveCat} className="w-full mb-1">
        salvar alterações
        <CircleCheckBig />
      </Button>
      <BackButton setState={setCardEditMode} />
    </div>
  );
};

export { CardEditMode };
