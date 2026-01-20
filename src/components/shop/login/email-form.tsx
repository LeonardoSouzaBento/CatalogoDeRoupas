import React, { useState } from 'react';
import { ButtonClose, HeaderCard } from '../../../app/_ui';
import { BooleanSetter } from '@/types/types';
import { Eye, EyeClosed, LogIn } from 'lucide-react';
import { iconMd } from '@/app/css/lucideIconStyles';

const css = { button: `h-11 w-full j-center` };

const EmailForm = ({ setSeeEmailForm }: { setSeeEmailForm: BooleanSetter }) => {
  const [seePassword, setSeePassword] = useState<boolean>(false);

  return (
    <div className="bg-white z-3 relative">
      <ButtonClose
        setState={setSeeEmailForm}
        simpleDesign={true}
        styles="br-lg size-[38px]! light-button"
        positionStyles="absolute -top-[7px] -right-3"
      />
      <HeaderCard
        wrapperStyles="mb-4!"
        title="Entre com email"
        icon="mail"
        iconStyles="font-semibold! !"
      />
      <div className="mb-[18px]">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="meuemail@email.com" />
      </div>
      <div className="mb-6 relative">
        <label htmlFor="password">Senha</label>
        <input
          type={seePassword ? 'text' : 'password'}
          id="password"
          placeholder="Geramos uma, se preferir."
        />
        <div
          className={`wrapper-icon absolute bottom-0 right-1`}
          onClick={() => {
            setSeePassword((prev) => !prev);
          }}>
          {seePassword ? <EyeClosed {...iconMd} /> : <Eye {...iconMd} />}
        </div>
      </div>
      <button className={`${css.button} mb-5`}>
        <div className="wrapper-icon">
          <LogIn {...iconMd} />
        </div>
        entrar
      </button>
      <button className={`${css.button} h-10! font-light bg-white  text-neutral-600`}>
        esqueci minha senha
      </button>
    </div>
  );
};

export default EmailForm;
