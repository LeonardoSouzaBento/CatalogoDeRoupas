import { MyAccountCore } from '@/components/store/my-account-core';
import { PageHeader, PageHeaderWrapper, PageTitle } from '@/components/ui';
import React from 'react';

const MinhaConta = (): React.ReactElement => {
  return (
    <div>
      <PageHeader>
        <PageHeaderWrapper className="sm:max-w-2xl md:max-w-3xl lg:max-w-212">
          <PageTitle className={``}>Minha Conta</PageTitle>
        </PageHeaderWrapper>
      </PageHeader>
      <div className={`body-wrapper`}>
        <MyAccountCore />
      </div>
    </div>
  );
};

export default MinhaConta;
