import React from 'react';

const TitleButtonGroup = ({ title }: { title: string }) => {
  return (
    <div className={`w-full flex items-center justify-start pl-4 pt-3`}>
      <p className={`font-medium text-muted-foreground tracking-wide`}>{title}</p>
    </div>
  );
};

export { TitleButtonGroup };
