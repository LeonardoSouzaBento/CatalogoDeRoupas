import { PublicDataContext } from "@contexts/PublicDataContext";
import React, { useContext, useState } from "react";
import AboutInput from "./inputs/AboutInput";
import { shopHomeSection, shopHomeWrapperSection } from "@/data/styles";
import HomeTitleSubtitle from "@ui/HomeTitleSubtitle";

const css = {
  footer: "bg-white",
  h1: "font-semibold",
  p: "pb-4 relative",
  wrapperAbout: "relative px-4",
  editMode: "bg-white shadow-lg/12 py-47 sm:py-40 md:py-34 br-lg bs-light",
  wrapperSmallP:
    "w-full h-16 px-6 centralize bg-stone-900 rounded-none",
  wrapperP: "size-full relative z-0 bg-white",
  lastP:
    "inline text-stone-300 font-light text-[0.900em] sm:text-[0.915em] md:text-[0.922em] lg:text-[0.936em] xl:text-[0.950em] 2xl:text-[0.964em]",
  input: "",
  editButton: "absolute bottom-2 right-2",
};

const Footer = (): React.ReactElement => {
  const [seeAboutInput, setSeeAboutInput] = useState<boolean>(false);
  const { shopInfo, setShopInfo } = useContext(PublicDataContext);

  return (
    <footer className={`${css.footer}`}>
      <section className={`${shopHomeSection}`}>
        <div className={`${shopHomeWrapperSection} !max-w-[800px]`}>
          <HomeTitleSubtitle title="Sobre Nós" subtitle="Conheça mais a nossa loja" />

          <div className={`${css.wrapperAbout} ${seeAboutInput && css.editMode}`}>
            {shopInfo.aboutText.map((paragraph, index: number) => (
              <div className={`${css.wrapperP}`} key={index}>
                <p key={index} className={`${css.p}`}>
                  {paragraph}
                </p>
              </div>
            ))}
            {seeAboutInput && (
              <AboutInput
                shopInfo={shopInfo}
                setShopInfo={setShopInfo}
                setSeeAboutInput={setSeeAboutInput}
              />
            )}
          </div>
        </div>
      </section>

      <div className={`${css.wrapperSmallP}`}>
        <p className={`${css.lastP}`}>
          © 2025 <strong>Roupas Online</strong>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
