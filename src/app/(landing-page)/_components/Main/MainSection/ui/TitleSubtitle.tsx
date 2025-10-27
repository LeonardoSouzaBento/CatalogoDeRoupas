const TitleSubtitle = () => {
  const css = {
    title: `text-white tracking-tight font-extrabold max-w-120 lg:max-w-130 text-center
       text-[1.900em] sm:text-[1.918em] md:text-[1.926em] lg:text-[1.943em] xl:text-[1.960em] 2xl:text-[1.977em]`,
    subtitle: `text-white tracking-tight text-center max-w-110 lg:max-w-130 
       font-light text-[1.340em] sm:text-[1.358em] md:text-[1.366em] lg:text-[1.383em] xl:text-[1.400em] 2xl:text-[1.417em]`,
    strong: "text-yellow-400",
  };
  
  return (
    <>
      <h1 className={`${css.title}`}>
        Tenha um <strong className={`${css.strong}`}>catálogo online</strong>{" "}
        para mostrar seus produtos e{" "}
        <strong className={`${css.strong}`}>aumente suas vendas.</strong>
      </h1>
      <h2 className={`${css.subtitle}`}>
        Facilite o processo de compra e aumente a visibilidade da sua loja.
      </h2>
    </>
  );
};

export default TitleSubtitle;
