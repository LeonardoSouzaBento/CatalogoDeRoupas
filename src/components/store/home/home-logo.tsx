'use client';
import React, { useContext, useState } from 'react';
import { HomeContext } from '@/contexts/index';
import { ShopName } from './header/shop-name';
import { EditSectionButton } from './ui';

const HomeLogo = () => {
  const [seeNameShop, setSeeNameShop] = useState<boolean>(false);
  const { homeEditMode } = useContext(HomeContext);

  return (
    <>
      <div className="w-full h-max relative">
        <div
          className={`bg-primary-800 relative w-full min-h-21 pb-1 flex-center flex-col z-6 rounded-none`}>
          <h2 className={`leading-none mb-1 font-logo text-white font-medium`}>Roupas Online</h2>
          <p className={`leading-none text-white font-thin`}>Guardamos suas curtidas</p>
        </div>
        {homeEditMode && (
          <EditSectionButton
            editMode={seeNameShop}
            setEditMode={setSeeNameShop}
            className="absolute top-5 right-4 z-6"
          />
        )}
      </div>
      {seeNameShop && <ShopName setSeeNameShop={setSeeNameShop} />}
    </>
  );
};

export { HomeLogo };
