"use client"
import React, { useContext, useState } from "react";
import { HomeContext } from "@/contexts";
import LogoHeader from "@/app/(landing-page)/_components/LogoHeader";
import NameShopInput from "./Header/inputs/NameShopInput";

const Logo = () => {
  const [seeInputNameShop, setSeeInputNameShop] = useState<boolean>(false);
  const { homeEditMode } = useContext(HomeContext);
  return (
    <>
      <LogoHeader
        setSeeInputNameShop={setSeeInputNameShop}
        homeEditMode={homeEditMode}
      />
      {seeInputNameShop && (
        <NameShopInput setSeeInputNameShop={setSeeInputNameShop} />
      )}
    </>
  );
};

export default Logo;
