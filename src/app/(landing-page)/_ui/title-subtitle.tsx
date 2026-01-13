import React from 'react';

interface TitleSubtitleSectionProps {
  title: string;
  subtitle?: string;
  secondSection?: boolean;
  thirdSection?: boolean;
}

const css = {
  div: `w-[calc(100%-52px)] lg:w-[calc(100%-150px)] m-auto flex flex-col items-center pt-3 
  border-t-2 border-dashed bs-color br-0`,
  title: `text-stone-800 font-extrabold  text-center max-[375px]:leading-9 leading-11`,
  subtitle: `text-gray-500 text-center mb-6`,
};

const TitleSubtitle = ({
  title,
  subtitle,
  secondSection,
  thirdSection,
}: TitleSubtitleSectionProps): React.ReactElement => {
  return (
    <div
      className={`${css.div} ${thirdSection && 'xl:border-none'} ${
        secondSection && 'border-none'
      }`}>
      <h2 className={`${css.title}`}>{title}</h2>
      {subtitle && <h3 className={`${css.subtitle}`}>{subtitle}</h3>}
    </div>
  );
};

export default TitleSubtitle;
