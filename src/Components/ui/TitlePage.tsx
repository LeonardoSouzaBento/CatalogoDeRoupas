import React from "react";

const css = { wrapper: ``, h1: `` };

const TitlePage = ({ title }: { title: string }): React.ReactElement => {
  return (
    <div className={`${css.wrapper}`}>
      <h1 className={`${css.h1}`}>{title}</h1>
    </div>
  );
};

export default TitlePage;
