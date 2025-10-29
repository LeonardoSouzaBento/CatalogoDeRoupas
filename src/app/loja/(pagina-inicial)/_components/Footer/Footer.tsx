const css = {
  footer: "w-full h-16 px-6 centralize bg-stone-900 rounded-none",
  wrapperP: "size-full relative z-0 bg-white",
  p: "inline text-stone-300 font-extralight text-[0.9em]",
};

const Footer = (): React.ReactElement => {
  return (
    <footer className={`${css.footer}`}>
      <p className={`${css.p}`}>
        © 2025 Roupas Online – Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
