"use client"
import { CardHeader, CardTitle, Icon, Input, Label, MuiIcon } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { UserContext } from '@/contexts';
import { validateEmail } from '@/functions/validateEmail';
import { validateName } from '@/functions/validateName';
import { BooleanSetter } from '@/types/types';
import { CircleCheckBig, Upload, X } from 'lucide-react';
import Image from 'next/image';
import { useContext, useState } from 'react';

const css = {
  pError: `text-red-600 mb-[14px]`,
};

export const InputNameEmail = ({ setSeeEditMode }: { setSeeEditMode: BooleanSetter }) => {
  const { userData } = useContext(UserContext);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [nameErrors, setNameErrors] = useState<string>('');
  const [emailErrors, setEmailErrors] = useState<string>('');

  async function handleSaveNameEmail() {
    setNameErrors(validateName(name));
    setTimeout(() => {
      setNameErrors('');
    }, 5000);
    setEmailErrors(validateEmail(email));
    setTimeout(() => {
      setEmailErrors('');
    }, 5000);
  }

  return (
    <div className={`flex flex-col gap-4 relative`}>
      <CardHeader>
        <CardTitle>
          <MuiIcon icon="edit" />
          <h3>Edite seus dados</h3>
        </CardTitle>
      </CardHeader>
      <Button
        className="absolute top-1 right-1"
        variant="transparent"
        size="icon"
        onClick={() => {
          setSeeEditMode(false);
        }}>
        <Icon LucideIcon={X} />
      </Button>
      {/* <p>Foto de perfil</p> */}
      <div className="size-auto flex items-center justify-start max-[430px]:gap-3 gap-5">
        <div className="size-16 min-w-16 br-50 bg-gray-100 crop relative">
          <Image src={`/`} fill={true} alt="" />
        </div>
        <button className="w-full  trans">
          Subir nova imagem
          <Upload />
        </button>
      </div>

      {/* nome */}
      <div>
        <Label htmlFor="name" className="mb-2">
          Nome
        </Label>
        <Input
          id="name"
          type="text"
          value={name}
          placeholder={userData.name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      {nameErrors && <p className={`${css.pError}`}>{nameErrors}</p>}
      {/* email */}
      <div>
        <Label htmlFor="email" className="mb-2">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder={userData.email}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      {emailErrors && <p className={`${css.pError}`}>{emailErrors}</p>}
      <Button onClick={handleSaveNameEmail} className="w-full mt-1">
        Salvar Alterações
        <CircleCheckBig />
      </Button>
    </div>
  );
};
