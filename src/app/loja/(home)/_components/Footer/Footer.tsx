import { defaultShopInfo } from "@/data/home/publicData";

const css = {
  footer: "bg-white",
  section: "w-[calc(100%-32px)] max-w-[800px] m-auto border-none",
  h1: "font-semibold",
  p: "pb-4 relative",
  wrapperAbout: "relative px-2",
  editMode: "bg-white shadow-lg/12 py-47 sm:py-40 md:py-34 br-lg light-border",
  wrapperSmallP:
    "w-full h-16 px-6 centralize bg-gradient-to-t from-black to-stone-800 rounded-none",
  wrapperP: "size-full relative z-0 bg-white",
  lastP:
    "inline text-stone-300 font-light text-[0.900em] sm:text-[0.915em] md:text-[0.922em] lg:text-[0.936em] xl:text-[0.950em] 2xl:text-[0.964em]",
  input: "",
  editButton: "absolute bottom-2 right-2",
};

const Footer = () => {
  return (
    <footer className={`${css.footer}`}>
      <section className={`${css.section}`}>
        <h1 className={`${css.h1}`}>Sobre Nós</h1>
        <h2>Conheça mais a nossa loja</h2>

        <div className={`${css.wrapperAbout}`}>
          {defaultShopInfo.aboutText.map((paragraph:string[], index: number) => (
            <div className={`${css.wrapperP}`} key={index}>
              <p key={index} className={`${css.p}`}>
                {paragraph}
              </p>
            </div>
          ))}
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
