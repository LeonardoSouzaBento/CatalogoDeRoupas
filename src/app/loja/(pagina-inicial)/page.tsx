"use client";
import { useState } from "react";
import { HomeDataProvider } from "@/contexts/Providers/HomeProvider";
import Header from "./_components/Header/Header";
import Main from "./_components/Main/Main";
import Footer from "./_components/Footer/Footer";
import ButtonChat from "@ui/ButtonChat";
import OptionsMenu from "./_components/OptionsMenu/OptionsMenu";
import ExitHomeEditButton from "../_ui/ExitHomeEditButton";

const Home = () => {
  const [seeOptionsSection, setSeeOptionsSection] = useState<boolean>(false);

  return (
    <HomeDataProvider>
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

export default Home;
