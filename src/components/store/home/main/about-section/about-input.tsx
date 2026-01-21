import { CloseButton } from '@/components/ui';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { defaultShopInfo } from '@/data/home/publicData';
import type { ShopInfo } from '@/types/types';
import { Check, Trash, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const css = {
  wrapper: 'abso z-2 size-full bg-white p-5 br-lg',
  header:
    'h-10 w-full mb-4 flex justify-between items-center border-b border-gray-300 rounded-none',
  h3: ' font-medium text-gray-800',
  textarea:
    'w-full h-[calc(100%-294px)] sm:h-[calc(100%-232px)] md:h-[calc(100%-184px)] px-3 mb-4 resize-none overflow-auto caret-indigo-950 focus:outline-none',
  wrapperButtons: 'w-full h-auto flex flex-col sm:flex-row sm:flex-wrap justify-end gap-2',
  buttons: 'w-full sm:w-70 md:w-max button !justify-start  xl:',
};

type AboutProps = {
  shopInfo: ShopInfo;
  setShopInfo: React.Dispatch<React.SetStateAction<ShopInfo>>;
  setSeeInput: React.Dispatch<React.SetStateAction<boolean>>;
};

const AboutInput = ({ shopInfo, setShopInfo, setSeeInput }: AboutProps): React.ReactElement => {
  const [Value, setValue] = useState<string>('');

  useEffect(() => {
    setValue(shopInfo.aboutText.join('\n\n'));
  }, []);

  function handleEnterEdit() {
    if (Value.length >= 760 && Value.length <= 1000) {
      const paragraphs = Value.split(/\r?\n/)
        .map((p) => p.trim())
        .filter((p) => p);

      setShopInfo({
        ...shopInfo,
        aboutText: paragraphs,
      });
    }
  }

  function handleDiscardChanges() {
    setShopInfo({
      ...shopInfo,
      aboutText: defaultShopInfo.aboutText,
    });
    setSeeInput(false);
  }

  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.header}`}>
        <h3 className={`${css.h3}`}>Edite o Sobre</h3>
        <CloseButton setState={setSeeInput} className="absolute top-3 right-3" />
      </div>
      <Alert variant="destructive">
        <AlertCircle />
        <AlertDescription>Quebre de linha para definir novos paragrafos.</AlertDescription>
      </Alert>
      <textarea
        value={Value}
        className={`${css.textarea}`}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onClick={() => {
          handleEnterEdit();
        }}
      />
      <div className={`${css.wrapperButtons}`}>
        <button
          className={`${css.buttons} order-2 sm:order-1`}
          onClick={() => {
            setValue('');
          }}>
          {' '}
          <Trash size={19} />
          Deletar Todo o Texto
        </button>
        <button className={`${css.buttons} order-3 sm:order-3`}>
          <Check />
          Salvar
        </button>
        <button className={`${css.buttons} order-2 sm:order-2`} onClick={handleDiscardChanges}>
          <X />
          Descartar Alterações
        </button>
      </div>
    </div>
  );
};

export default AboutInput;
