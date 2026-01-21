import React from 'react';
import Core from './Core';
import { PageHeader, PageTitle } from '@/components/ui';

const page = () => {
  return (
    <>
      <PageHeader>
        <PageTitle className="max-w-[554px]">Cadastrar minha loja</PageTitle>
      </PageHeader>
      <div className="px-3 pb-8 m-auto max-w-[576px]">
        <Core />
      </div>
    </>
  );
};

export default page;
