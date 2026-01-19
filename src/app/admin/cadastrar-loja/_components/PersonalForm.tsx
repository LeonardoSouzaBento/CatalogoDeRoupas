import { HeaderCard } from '@/app/_ui';
import SaveButton from '@/app/_ui/SaveButton';
import { Shopkeeper } from '@/types/types';
import React, { useState } from 'react';

interface InputField {
  label: string;
  name: keyof Shopkeeper;
  placeholder: string;
  maxLength: number;
}

const inputs: InputField[] = [
  {
    label: 'Nome pessoal',
    name: 'personalName',
    placeholder: 'Digite seu nome',
    maxLength: 60,
  },
  {
    label: 'Nome da loja',
    name: 'storeName',
    placeholder: 'Digite o nome fantasia',
    maxLength: 60,
  },
  {
    label: 'Email principal',
    name: 'email',
    placeholder: 'seuemail@email.com',
    maxLength: 50,
  },
  {
    label: 'Whatsapp',
    name: 'whatsapp',
    placeholder: 'XX XXXXX XXXX',
    maxLength: 20,
  },
  {
    label: 'Telefone',
    name: 'phone',
    placeholder: '(Opcional)',
    maxLength: 20,
  },
  {
    label: 'Nome da empresa',
    name: 'companyName',
    placeholder: 'Digite a razão social',
    maxLength: 60,
  },
  {
    label: 'CPF ou CNPJ',
    name: 'cpf',
    placeholder: 'Apenas números',
    maxLength: 14,
  },
];

const css = {
  wrapper: 'w-full block border-none mb-5',
  input: `mb-4`,
};

const PersonalForm = () => {
  const [shopkeeper, setShopkeeper] = useState<Shopkeeper>({
    personalName: '',
    storeName: '',
    companyName: '',
    email: '',
    phone: '',
    whatsapp: '',
    cpf: '',
    plan: '',
    startDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShopkeeper((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSaveShopkeeper() {
    console.log('sim');
  }

  return (
    <div>
      <HeaderCard
        title="Informações gerais"
        wrapperStyles="mb-3.5!"
        icon="assignment_ind"
        iconStyles=" font-medium!"
      />
      <form className={`mb-5 px-0.5 pb-5 bs-b bs-color `}>
        {inputs.map((field, index) => (
          <div key={field.name}>
            <label htmlFor={field.name} className={`normal-case!`}>
              {field.label}
            </label>
            <input
              type="text"
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={shopkeeper[field.name]}
              required
              maxLength={field.maxLength}
              onChange={handleChange}
              className={`${css.input} ${index === inputs.length - 1 ? 'mb-0!' : ''}`}
            />
          </div>
        ))}
      </form>
      <SaveButton Function={handleSaveShopkeeper} styles="justify-center" />
    </div>
  );
};

export default PersonalForm;
