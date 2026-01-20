import HomeSectionTitle from '@/app/_ui/home-section-title';
import { PublicDataContext } from '@/contexts/PublicDataContext';
import { useContext, useState } from 'react';
import AboutInput from './inputs/AboutInput';

const css = {
  wrapperAbout: 'm-auto relative',
  homeEditMode: 'bg-white shadow-lg/12 py-47 sm:py-40 md:py-34 br-lg ',
  wrapperP: 'size-full relative z-0 bg-white',
  p: 'pb-3 relative',
};

const AboutSection = () => {
  const [seeAboutInput, setSeeAboutInput] = useState<boolean>(false);
  const { shopInfo, setShopInfo } = useContext(PublicDataContext);

  return (
    <>
      <HomeSectionTitle
        title="Sobre Nós"
        subtitle="Conheça mais a nossa loja"
        sectionEditMode={seeAboutInput}
        setSectionEditMode={setSeeAboutInput}
      />
      <div className={`${css.wrapperAbout} ${seeAboutInput && css.homeEditMode}`}>
        {shopInfo.aboutText.map((paragraph, index: number) => (
          <div className={`${css.wrapperP}`} key={index}>
            <p key={index} className={`${css.p}`}>
              {paragraph}
            </p>
          </div>
        ))}
        {seeAboutInput && (
          <AboutInput
            shopInfo={shopInfo}
            setShopInfo={setShopInfo}
            setSeeAboutInput={setSeeAboutInput}
          />
        )}
      </div>
    </>
  );
};

export default AboutSection;
