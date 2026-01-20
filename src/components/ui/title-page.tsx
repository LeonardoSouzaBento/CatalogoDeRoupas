import React from 'react';

export const TitlePage = ({
  title,
  styles,
}: {
  title: string;
  styles?: string;
}): React.ReactElement => {
  return (
    <div
      className={`h-14 box-border px-3 pl-[13px] mb-3 bg-stone-800 flex items-center justify-center br-0`}>
      <h1
        className={`w-full text-white font-bold leading-none capitalize  mt-px trancinkg-[0.24px] ${styles}`}>
        {title}
      </h1>
    </div>
  );
};
