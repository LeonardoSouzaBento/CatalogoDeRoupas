import React from "react";

const TitleButtonGroup = ({ title }: { title: string }) => {
  return (
    <div className={`w-full flex i-center j-start pl-4 pt-3`}>
      <p className={`font-medium text-muted-foreground tracking-wide`}>{title}</p>
    </div>
  );
};

export {TitleButtonGroup};
