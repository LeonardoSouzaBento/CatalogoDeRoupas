"use client"
import Header from "./_components/Header/Header";
import Main from "./_components/Main/Main";
import Footer from "./_components/Footer/Footer";
import { HomeDataProvider } from "@contexts/Providers/HomeDataProvider";

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
