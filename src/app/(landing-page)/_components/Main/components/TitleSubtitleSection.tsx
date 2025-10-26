import React from "react";

interface TitleSubtitleSectionProps {
  title: string;
  subtitle?: string;
  section?: string;
}

const TitleSubtitleSection = ({
  title,
  subtitle,
  section,
}: TitleSubtitleSectionProps): React.ReactElement => {
  const styles = {
    title:
      "text-stone-800 font-extrabold font-p text-center max-[375px]:leading-9 leading-11 text-[1.350em] sm:text-[1.397em] md:text-[1.419em] lg:text-[1.465em] xl:text-[1.510em] 2xl:text-[1.555em]",
    subtitle:
      "text-gray-600 font-p text-center mb-7 text-[1.220em] sm:text-[1.229em] md:text-[1.233em] lg:text-[1.242em] xl:text-[1.250em] 2xl:text-[1.258em]",
    plansSection: "",
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className={styles.title}>{title}</h2>
      {subtitle && (
        <h3
          className={`${styles.subtitle} ${
            section === "plansSection" && styles.plansSection
          }`}
        >
          {subtitle}
        </h3>
      )}
    </div>
  );
};

export default TitleSubtitleSection;
