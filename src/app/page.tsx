import Header from "@/components/home/Header/Header";
import "./page.css";
import {
  WhySection,
  PlansSection,
  MainSection,
  HowSection,
} from "@/components/home/Main/index";
import Footer from "@/components/home/Footer/Footer";

export default function Home() {
  const css = {
    wrapper: `xl:my-7 xl:w-auto xl:h-[700px] xl:flex xl:gap-7 xl:px-9 xl:items-start 
    xl:justify-items-start `,
  };

  return (
    <>
      <Header />
      <main className="pb-4 xl:pb-9">
        <MainSection />
        <div className={`${css.wrapper}`}>
          <WhySection />
          <HowSection />
        </div>
        <PlansSection />
      </main>
      <Footer />
    </>
  );
}
