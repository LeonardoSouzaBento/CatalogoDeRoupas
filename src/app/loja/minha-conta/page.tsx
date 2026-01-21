import { MyAccountCore } from '@/components/store/my-account-core';
import { TitlePage } from '@/components/ui/title-page';
import React from 'react';

const css = {
  mainWrapper: `px-3 m-auto lg:px-6 lg:flex lg:flex-wrap lg:gap-5 lg:max-w-[1208px]`,
  wrapper: `pt-4 p-6 m-auto mb-5 lg:m-0! lg:w-[calc(50%-12px)] max-w-[592px] 
     sm:max-w-[564px] md:max-w-[640px] lg:max-w-[592px]`,
};

const MinhaConta = (): React.ReactElement => {
  return (
    <div className="pb-10 lg:pb-0">
      <TitlePage
        title="Minha Conta"
        styles={`ml-px sm:pl-0 max-w-[592px] sm:max-w-[564px] md:max-w-[640px] 
        lg:w-[calc(100%-24px)] lg:max-w-[1162px]`}
      />
      <div className={css.mainWrapper}>
        <MyAccountCore />
      </div>
    </div>
  );
};

export default MinhaConta;
