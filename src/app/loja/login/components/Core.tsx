'use client';
import React, { useState } from 'react';
import { HeaderCard } from '../../../_ui';
import ButtonLoginGoogle from './ButtonLoginGoogle';
import ButtonLoginEmail from './ButtonLoginEmail';
import EmailForm from './EmailForm';

const Core = () => {
  const [seeEmailForm, setSeeEmailForm] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col">
      {!seeEmailForm ? (
        <>
          <HeaderCard
            title="Fazer Login"
            subtitle="Recomendamos o login com Google"
            iconStyles="font-medium! ! mt-1"
            titleStyles="font-semibold !"
          />
          <ButtonLoginGoogle />
          <ButtonLoginEmail seeEmailForm={seeEmailForm} setSeeEmailForm={setSeeEmailForm} />
        </>
      ) : (
        <EmailForm setSeeEmailForm={setSeeEmailForm} />
      )}
    </div>
  );
};

export default Core;
