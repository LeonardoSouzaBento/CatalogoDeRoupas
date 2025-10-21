import React from "react";
import Header from "@/app/loja/(home)/_components/Header/Header";
import Main from "@/app/loja/(home)/_components/Main/Main";
import Footer from "@/app/loja/(home)/_components/Footer/Footer";
import { HomeDataProvider } from "@/contexts/Providers/HomeDataProvider";

const page = () => {
  return (
    <HomeDataProvider>
      <Header />
      <Main />
      <Footer />
    </HomeDataProvider>
  );
};

export default page;
