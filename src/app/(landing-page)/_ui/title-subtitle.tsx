import React from 'react';

interface TitleSubtitleSectionProps {
  title: string;
  subtitle?: string;
  secondSection?: boolean;
  thirdSection?: boolean;
}

const css = {
  div: `w-[calc(100%-52px)] lg:w-[calc(100%-150px)] m-auto flex flex-col items-center pt-3 
  border-t-2 border-dashed border br-0`,
  title: `text-stone-800 text-center`,
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
      <h3 className={`${css.title}`}>{title}</h3>
      {subtitle && <h6 className={`${css.subtitle}`}>{subtitle}</h6>}
    </div>
  );
};

export default TitleSubtitle;
