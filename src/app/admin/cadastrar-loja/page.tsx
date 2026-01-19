import React from 'react';
import Core from './Core';
import { TitlePage } from '@/app/_ui';

const page = () => {
  return (
    <>
      <TitlePage title="Cadastrar minha loja" styles="max-w-[554px]" />
      <div className="px-3 pb-8 m-auto max-w-[576px]">
        <Core />
      </div>
    </>
  );
};

export default page;
