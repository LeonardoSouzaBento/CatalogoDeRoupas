const Paragraph = () => {
  const css = {
    wrapperP: `w-full max-w-86 px-4 h-13 flex justify-center items-center gap-2 
      bg-linear-to-br from-magenta to-violet 
      rounded-2xl`,
    p: `text-indigo-50  font-light leading-6 mb-[1px] w-max`,
  };

  return (
    <div className={`${css.wrapperP}`}>
      <p className={`${css.p}`}>Experimente um mês grátis!</p>
    </div>
  );
};

export default Paragraph;
