"use client"
import React, { useContext, useState } from "react";
import { HomeContext } from "@/contexts";
import ShopNameInput from "./TopNavigationBar/inputs/ShopNameInput";
import LogoSection from "@/app/(landing-page)/_components/LogoSection";

const LogoArea = () => {
  const [seeInputNameShop, setSeeInputNameShop] = useState<boolean>(false);
  const { homeEditMode } = useContext(HomeContext);
  
  return (
    <>
      <LogoSection
        setSeeInputNameShop={setSeeInputNameShop}
        homeEditMode={homeEditMode}
      />
      {seeInputNameShop && (
        <ShopNameInput setSeeInputNameShop={setSeeInputNameShop} />
      )}
    </>
  );
};

export default LogoArea;
