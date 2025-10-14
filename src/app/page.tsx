import Header from "@/Components/Home/Header/Header";
import "./page.css";
import {
  WhySection,
  PlansSection,
  MainSection,
  HowSection,
} from "@/Components/Home/Main/index";
import Footer from "@/Components/Home/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <WhySection />
        <HowSection />
        <PlansSection />
      </main>

      <Footer />
    </>
  );
}
