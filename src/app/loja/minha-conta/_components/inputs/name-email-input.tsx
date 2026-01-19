import React, { useContext, useState } from 'react';
import { iconMd } from '@/app/css/lucideIconStyles';
import { Check, Upload } from 'lucide-react';
import { validateName } from '@/functions/validateName';
import { validateEmail } from '@/functions/validateEmail';
import Image from 'next/image';
import { ButtonClose, HeaderCard } from '@/app/_ui';
import { BooleanSetter } from '@/types/types';
import { UserContext } from '@/contexts';
import SaveButton from '@/app/_ui/SaveButton';

const css = {
  pError: `text-red-600 mb-[14px]`,
};

const NameEmailInput = ({ setSeeEditMode }: { setSeeEditMode: BooleanSetter }) => {
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
      <HeaderCard
        title="Edite seus dados"
        icon="edit"
        wrapperStyles="bs-light-color"
        iconStyles="!"
      />
      <ButtonClose
        setState={setSeeEditMode}
        simpleDesign={true}
        styles="light-button size-9!"
        positionStyles="absolute -top-1 -right-3"
      />
      {/* <p>Foto de perfil</p> */}
      <div className="size-auto flex items-center justify-start max-[430px]:gap-3 gap-5">
        <div className="size-16 min-w-16 br-50 bg-gray-100 crop relative">
          <Image src={`/`} fill={true} alt="" />
        </div>
        <button className="w-full light-button trans">
          Subir nova imagem
          <div className="wrapper-icon">
            <Upload {...iconMd} />
          </div>
        </button>
      </div>

      {/* nome */}
      <div>
        <label htmlFor="name" className="mb-2">
          Nome
        </label>
        <input
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
        <label htmlFor="email" className="mb-2">
          Email
        </label>
        <input
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
      <SaveButton text="Salvar Alterações" Function={handleSaveNameEmail} styles="mt-1" />
    </div>
  );
};

export default NameEmailInput;
