"use client"
import Header from "./_components/Header/Header";
import Main from "./_components/Main/Main";
import Footer from "./_components/Footer/Footer";
import { HomeDataProvider } from "@contexts/Providers/HomeDataProvider";
import "./page.css"
import ButtonChat from "@ui/ButtonChat";

const Home = () => {
  return (
    <HomeDataProvider>
      <Header />
      <Main />
      <Footer />
      <ButtonChat />
    </HomeDataProvider>
  );
};

export default Home;
