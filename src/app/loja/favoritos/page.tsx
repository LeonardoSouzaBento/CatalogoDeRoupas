import React from 'react';
import ZapFixedButton from '@/components/ui/ZapFixedButton';
import { TitlePage } from '@/components/ui';
import { NoClothesAlert } from '@/components/store/favorites';

const css = {
  container: 'px-3 pb-5',
  wrapper: `bg-white br-lg p-5`,
};

const Favoritos = (): React.ReactElement => {
  return (
    <>
      <TitlePage title="Meus Favoritos" />
      <div className={`${css.container}`}>
        <div className={`${css.wrapper} shadow-lg`}>
          {/* <HeaderCard title="Produtos curtidos" icon="bookmark_heart" /> */}

          <NoClothesAlert />
        </div>
        <ZapFixedButton />
      </div>
    </>
  );
};

export default Favoritos;
