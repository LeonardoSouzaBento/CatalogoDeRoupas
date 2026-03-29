import React from 'react';

const TitleButtonGroup = ({ title }: { title: string }) => {
  return (
    <div className={`w-full flex items-center justify-start pl-3.25 pt-4 pb-1`}>
      <p className={`font-normal text-muted-foreground/88 tracking-wide uppercase`}>{title}</p>
    </div>
  );
};

export { TitleButtonGroup };
