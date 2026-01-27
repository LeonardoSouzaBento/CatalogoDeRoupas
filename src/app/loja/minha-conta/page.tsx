import { MyAccountCore } from '@/components/store/my-account-core';
import { PageHeader, PageHeaderWrapper, PageTitle } from '@/components/ui';
import React from 'react';

const MinhaConta = (): React.ReactElement => {
  return (
    <div>
      <PageHeader className="px-3 sm:px-4">
        <PageHeaderWrapper className="sm:max-w-2xl md:max-w-3xl lg:max-w-212">
          <PageTitle>Minha Conta</PageTitle>
        </PageHeaderWrapper>
      </PageHeader>
      <div className={`body-wrapper`}>
        <MyAccountCore />
      </div>
    </div>
  );
};

export default MinhaConta;
