"use client";
import { HomeDataProvider } from "@/contexts/Providers/HomeProvider";
import ZapFixedButton from "@/app/loja/_ui/ZapFixedButton";
import { useState } from "react";
import ExitHomeEditButton from "../_ui/ExitHomeEditButton";
import Footer from "./_components/Footer/Footer";
import TopNavigationBar from "./_components/TopNavigationBar/TopNavigationBar";
import LogoArea from "./_components/LogoArea";
import Main from "./_components/Main/Main";
import OptionsMenu from "./_components/OptionsMenu/OptionsMenu";

const Core = () => {
  const [seeOptionsSection, setSeeOptionsSection] = useState<boolean>(false);

  return (
    <HomeDataProvider>
      <LogoArea />
      <TopNavigationBar setSeeOptionsSection={setSeeOptionsSection} />
      {seeOptionsSection && (
        <OptionsMenu setSeeOptionsSection={setSeeOptionsSection} />
      )}
      <Main />
      <Footer />
      <ExitHomeEditButton />
      <ZapFixedButton />
    </HomeDataProvider>
  );
};

export default Core;
