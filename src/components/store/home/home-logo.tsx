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
      <div className="w-full bg-primary-800 relative min-h-21 h-max z-6 flex items-center">
        <div
          className={`w-full max-w-max mx-auto 
          ${homeEditMode && 'px-4 py-2 grid grid-cols-[1fr_auto] gap-4 items-center'}`}>
          <div className={`flex-center flex-col rounded-none`}>
            <h2 className={`leading-none mb-1 font-logo text-white font-medium`}>Roupas Online</h2>
            <p className={`leading-none text-white font-thin`}>Guardamos suas curtidas</p>
          </div>
          {homeEditMode && (
            <EditSectionButton
              editMode={seeNameShop}
              setEditMode={setSeeNameShop}
              variant="secondary"
              className="mb-0"
            />
          )}
        </div>
      </div>
      {seeNameShop && <ShopName setSeeNameShop={setSeeNameShop} />}
    </>
  );
};

export { HomeLogo };
