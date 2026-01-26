import { MyAccountCore } from '@/components/store/my-account-core';
import { PageHeader, PageTitle } from '@/components/ui';
import React from 'react';

const MinhaConta = (): React.ReactElement => {
  return (
    <div>
      <PageHeader>
        <PageTitle
          className={``}>
          Minha Conta
        </PageTitle>
      </PageHeader>
      <div className={`body-wrapper`}>
        <MyAccountCore />
      </div>
    </div>
  );
};

export default MinhaConta;
