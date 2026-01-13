const TitleSubtitle = () => {
  const css = {
    title: `text-white tracking-tight font-extrabold max-w-120 lg:max-w-130 
    text-center`,
    subtitle: `text-white/93 tracking-tight text-center max-w-110 lg:max-w-130 
       font-light`,
    strong: 'text-yellow-400',
  };

  return (
    <>
      <h1 className={`${css.title}`}>
        Tenha um <strong className={`${css.strong}`}>catálogo online</strong> para mostrar seus
        produtos e <strong className={`${css.strong}`}>aumente suas vendas.</strong>
      </h1>
      <h2 className={`${css.subtitle}`}>
        Facilite o processo de compra e aumente a visibilidade da sua loja.
      </h2>
    </>
  );
};

export default TitleSubtitle;
