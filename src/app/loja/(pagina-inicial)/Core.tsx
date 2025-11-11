"use client";
import { HomeDataProvider } from "@/contexts/Providers/HomeProvider";
import ButtonChat from "@ui/ButtonChat";
import { useState } from "react";
import ExitHomeEditButton from "../_ui/ExitHomeEditButton";
import Footer from "./_components/Footer/Footer";
import Header from "./_components/Header/Header";
import Logo from "./_components/Logo";
import Main from "./_components/Main/Main";
import OptionsMenu from "./_components/OptionsMenu/OptionsMenu";

const Core = () => {
  const [seeOptionsSection, setSeeOptionsSection] = useState<boolean>(false);

  return (
    <HomeDataProvider>
      <Logo />
      <Header setSeeOptionsSection={setSeeOptionsSection} />
      {seeOptionsSection && (
        <OptionsMenu setSeeOptionsSection={setSeeOptionsSection} />
      )}
      <Main />
      <Footer />
      <ExitHomeEditButton />
      <ButtonChat />
    </HomeDataProvider>
  );
};

export default Core;
