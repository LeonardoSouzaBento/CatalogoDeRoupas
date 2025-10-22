"use client"
import Header from "./_components/home/Header/Header";
import Main from "./_components/home/Main/Main";
import Footer from "./_components/home/Footer/Footer";
import { HomeDataProvider } from "@contexts/Providers/HomeDataProvider";
import "./page.css"

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
