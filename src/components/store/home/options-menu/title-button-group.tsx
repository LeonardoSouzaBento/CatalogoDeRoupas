import React from "react";

const css = {
  wrapper: ``,
  title: ``,
};

const TitleButtonGroup = ({ title }: { title: string }) => {
  return (
    <div className={`w-full flex i-center j-start`}>
      <p className={`font-medium text-muted-foreground tracking-wide`}>{title}</p>
    </div>
  );
};

export {TitleButtonGroup};
