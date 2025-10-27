const P = () => {
  const css = {
    wrapperP:
      "w-full max-w-86 px-4 h-13 flex justify-center items-center gap-2 bg-[linear-gradient(135deg,hsl(330_75%_45%)_0%,hsl(280_70%_40%)_100%)] rounded-2xl",
    p: "text-indigo-50  font-light leading-6 mb-[1px] w-max text-[1.050em] sm:text-[1.065em] md:text-[1.072em] lg:text-[1.086em] xl:text-[1.100em] 2xl:text-[1.114em]",
  };

  return (
    <div className={`${css.wrapperP}`}>
      <p className={`${css.p}`}>Experimente um mês grátis!</p>
    </div>
  );
};

export default P;
