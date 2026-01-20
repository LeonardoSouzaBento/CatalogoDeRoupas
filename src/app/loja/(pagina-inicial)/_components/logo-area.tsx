'use client';
import React, { useContext, useState } from 'react';
import { HomeContext } from '@/contexts';
import ShopName from './top-nav-bar/shop-name-';
import LogoSection from '@/app/(landing-page)/_components/logo-section';

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

export default LogoArea;
