
const TextContent = () => {
  return (
    <>
      <h1
        className={`pt-[1cap] text-primary-50 font-extrabold
        text-center h1-hero [&>strong]:text-yellow-400 mb-4 leading-[1.125em]`}>
        Tenha um <strong>catálogo online</strong> para mostrar seus produtos e{' '}
        <strong>aumente suas vendas.</strong>
      </h1>

      <h3 className={`text-primary-50/93 text-center font-thin mb-8`}>
        Facilite o processo de compra do cliente e aumente as vendas da sua loja.
      </h3>

      <div
        className={`w-full max-w-81.5 mb-6 flex-center gap-2 
      bg-linear-to-br from-female to-male 
      rounded-xl`}>
        <p
          className={`text-indigo-50 font-light leading-none mb-0.5 text-lg px-[0.9em] py-cap-offset`}>
          Experimente um mês grátis!
        </p>
      </div>
    </>
  );
};

export { TextContent };

