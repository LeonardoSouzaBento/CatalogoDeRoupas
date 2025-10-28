const css = {
  footer: "w-full h-16 px-6 centralize bg-stone-900 rounded-none",
  wrapperP: "size-full relative z-0 bg-white",
  p: "inline text-stone-300 font-light text-[0.900em] sm:text-[0.915em] md:text-[0.922em] lg:text-[0.936em] xl:text-[0.950em] 2xl:text-[0.964em]",
};

const Footer = (): React.ReactElement => {
  return (
    <footer className={`${css.footer}`}>
      <p className={`${css.p}`}>
        © 2025 <strong>Roupas Online</strong>. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
