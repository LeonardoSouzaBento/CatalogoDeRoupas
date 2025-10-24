const Title = () => {
  const css = {
    title:
      "text-white font-bold max-w-120 lg:max-w-130 text-center font-h text-[1.800em] sm:text-[1.888em] md:text-[1.930em] lg:text-[2.015em] xl:text-[2.100em] 2xl:text-[2.185em] !leading-12",
    subtitle:
      "text-white font-h font-normal text-center max-w-110 lg:max-w-130 text-[1.300em] sm:text-[1.388em] md:text-[1.430em] lg:text-[1.515em] xl:text-[1.600em] 2xl:text-[1.685em]",
    strong: "text-yellow-400",
    u: "decoration-2 decoration-teal-400 text-teal-400",
  };

  return (
    <>
      <h1 className={`${css.title}`}>
        Tenha um <strong className={`${css.strong}`}>catálogo online</strong>{" "}
        para mostrar seus produtos e{" "}
        <strong className={`${css.strong}`}>aumente suas vendas.</strong>
      </h1>
      <h2 className={`${css.subtitle}`}>
        <u className={`${css.u}`}>Facilite o processo de compra </u>e aumente a
        visibilidade da sua loja.
      </h2>
    </>
  );
};

export default Title;