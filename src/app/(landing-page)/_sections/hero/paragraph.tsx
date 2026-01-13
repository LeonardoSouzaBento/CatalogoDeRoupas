const Paragraph = () => {
  const css = {
    wrapperP: `w-full max-w-86 px-4 h-13 flex justify-center items-center gap-2 
      bg-linear-to-br from-magenta to-violet 
      rounded-2xl`,
    p: `text-indigo-50  font-light leading-6 mb-[1px] w-max text-[1.02857em] 
    sm:text-[1.04395em] md:text-[1.05137em] lg:text-[1.06623em] 
    xl:text-[1.08108em] 2xl:text-[1.09593em]`,
  };

  return (
    <div className={`${css.wrapperP}`}>
      <p className={`${css.p}`}>Experimente um mês grátis!</p>
    </div>
  );
};

export default Paragraph;
