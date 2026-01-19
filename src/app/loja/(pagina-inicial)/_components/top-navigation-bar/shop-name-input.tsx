import { ButtonClose } from '@/app/_ui';
import SaveButton from '@/app/_ui/SaveButton';
import { PublicDataContext } from '@contexts/PublicDataContext';
import React, { useContext, useState } from 'react';

const css = {
  wrapper: 'w-full abso pt-3 pb-3 bg-gray-100 z-1',
  wrapperForm:
    'w-[calc(100%-16px)] h-max p-5 m-auto max-w-128 flex flex-col gap-4 bg-white br-lg relative shadow-md',
  label: `h3-sizes leading-5 font-medium !text-neutral-800 border-b border-neutral-300 pb-[14px]`,
  wrapperButtons: 'flex items-start gap-3',
  buttonSend: 'button',
};

type NameShopInputProps = {
  setSeeInputNameShop: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShopNameInput = ({ setSeeInputNameShop }: NameShopInputProps): React.ReactElement => {
  const [inputValue, setInputValue] = useState<string>('');
  const { shopInfo, setShopInfo } = useContext(PublicDataContext);

  async function handleEdit() {
    if (inputValue.length >= 6) {
      setShopInfo({ ...shopInfo, name: inputValue });
    }
  }

  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.wrapperForm}`}>
        <ButtonClose setState={setSeeInputNameShop} />
        <label htmlFor="name" className={`${css.label}`}>
          Digite o nome da sua loja
        </label>
        <input
          id="name"
          name="name"
          className={`input mb-0!`}
          value={inputValue}
          placeholder="Digite aqui"
          onChange={(e) => setInputValue(e.target.value)}
        />

        <SaveButton Function={handleEdit} />
      </div>
    </div>
  );
};

export default ShopNameInput;
