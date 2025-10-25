const Subtitle = () => {
  const css = {
    wrapperP:
      "w-full max-w-86 px-4 h-13 flex justify-center items-center gap-2 bg-black/5 rounded-xl",
    p: "!text-indigo-50 leading-6 w-max text-[1.203em] sm:text-[1.228em] md:text-[1.241em] lg:text-[1.265em] xl:text-[1.290em] 2xl:text-[1.315em]",
  };

  return (
    <div className={`${css.wrapperP}`}>
      <p className={`${css.p}`}>Experimente um mês grátis</p>
    </div>
  );
};

export default Subtitle;