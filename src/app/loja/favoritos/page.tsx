import React from 'react';
import ZapFixedButton from '@/app/_ui/ZapFixedButton';
import TitlePage from '@/app/_ui/TitlePage';
import { HeaderCard } from '../../_ui';
import NoClothesAlert from '@/components/shop/favorites/no-clothes-alert';

const css = {
  mainWrapper: 'px-3 pb-5',
  wrapper: `bg-white br-lg p-5`,
};

const Favoritos = (): React.ReactElement => {
  return (
    <>
      <TitlePage title="Meus Favoritos" />
      <div className={`${css.mainWrapper}`}>
        <div className={`${css.wrapper} shadow-lg`}>
          <HeaderCard title="Produtos curtidos" icon="bookmark_heart" />

          <NoClothesAlert />
        </div>
        <ZapFixedButton />
      </div>
    </>
  );
};

export default Favoritos;
