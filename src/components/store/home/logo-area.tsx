'use client';
import React, { useContext, useState } from 'react';
import { HomeContext } from '@/contexts';
import { ShopName } from './header/shop-name';
import {LogoSection} from '@/components/landing-page/sections/logo-section';

const LogoArea = () => {
  const [seeNameShop, setSeeNameShop] = useState<boolean>(false);
  const { homeEditMode } = useContext(HomeContext);

  return (
    <>
      <LogoSection setSeeNameShop={setSeeNameShop} homeEditMode={homeEditMode} />
      {seeNameShop && <ShopName setSeeNameShop={setSeeNameShop} />}
    </>
  );
};

export {LogoArea};
