import { CardHeader, CardTitle, Input, InputWrapper, Label, MuiIcon } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { shopkeeperInputs } from '@/data/admin/shopkeeperInputs';
import type { Shopkeeper } from '@/types/types';
import { CircleCheckBig } from 'lucide-react';
import React, { useState } from 'react';

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
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="assignment_ind" />
          <h3>Informações gerais</h3>
        </CardTitle>
      </CardHeader>
      <form className={`mb-5 px-0.5 pb-5 border-b border `}>
        {shopkeeperInputs.map((field, index) => (
          <InputWrapper key={field.name}>
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input
              type="text"
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              value={shopkeeper[field.name]}
              required
              maxLength={field.maxLength}
              onChange={handleChange}
            />
          </InputWrapper>
        ))}
      </form>
      <Button onClick={handleSaveShopkeeper} className="w-full justify-center">
        Salvar
        <CircleCheckBig />
      </Button>
    </div>
  );
};

export { PersonalForm };
