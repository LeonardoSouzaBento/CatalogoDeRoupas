import { CloseButton, Input } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { PublicDataContext } from '@/contexts/publicDataContext';
import { CircleCheckBig } from 'lucide-react';
import React, { useContext, useState } from 'react';

const css = {
  wrapper: 'w-full abso pt-3 pb-3 bg-gray-100 z-1',
  wrapperForm:
    'w-[calc(100%-16px)] h-max p-5 m-auto max-w-128 flex flex-col gap-4 bg-white br-lg relative shadow-md',
  label: ` leading-5 font-medium !text-neutral-800 border-b border-neutral-300 pb-[14px]`,
  wrapperButtons: 'flex items-start gap-3',
  buttonSend: 'button',
};

type NameShopProps = {
  setSeeNameShop: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShopName = ({ setSeeNameShop }: NameShopProps): React.ReactElement => {
  const [Value, setValue] = useState<string>('');
  const { shopInfo, setShopInfo } = useContext(PublicDataContext);

  async function handleEdit() {
    if (Value.length >= 6) {
      setShopInfo({ ...shopInfo, name: Value });
    }
  }

  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.wrapperForm}`}>
        <CloseButton setState={setSeeNameShop} />
        <label htmlFor="name" className={`${css.label}`}>
          Digite o nome da sua loja
        </label>
        <Input
          id="name"
          name="name"
          className={` mb-0!`}
          value={Value}
          placeholder="Digite aqui"
          onChange={(e) => setValue(e.target.value)}
        />

        <Button onClick={handleEdit} className="w-full">
          Salvar
          <CircleCheckBig />
        </Button>
      </div>
    </div>
  );
};

export { ShopName };

