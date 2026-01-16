const TextContent = () => {
  return (
    <>
      <h1
        className={`text-white font-extrabold max-w-120 lg:max-w-130 
        text-center h1-hero [&>strong]:text-yellow-400 mb-4`}>
        Tenha um <strong>catálogo online</strong> para mostrar seus produtos e{' '}
        <strong>aumente suas vendas.</strong>
      </h1>
      <h3 className={`text-white/93 text-center max-w-110 lg:max-w-130 font-thin mb-6`}>
        Facilite o processo de compra do cliente e aumente as vendas da sua loja.
      </h3>

      <div
        className={`w-full max-w-86 mb-6 px-4 h-13 flex justify-center items-center gap-2 
      bg-linear-to-br from-magenta to-violet 
      rounded-2xl`}>
        <p className={`text-indigo-50 font-light leading-none mb-0.5 max-w-max text-lg`}>
          Experimente um mês grátis!
        </p>
      </div>
    </>
  );
};

export default TextContent;
