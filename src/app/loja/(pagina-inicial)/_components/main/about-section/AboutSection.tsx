import HomeSectionTitle from '@/app/_ui/home-section-title';
import { PublicDataContext } from '@/contexts/PublicDataContext';
import { useContext, useState } from 'react';
import About from './s/About';

const css = {
  wrapperAbout: 'm-auto relative',
  homeEditMode: 'bg-white shadow-lg/12 py-47 sm:py-40 md:py-34 br-lg ',
  wrapperP: 'size-full relative z-0 bg-white',
  p: 'pb-3 relative',
};

const AboutSection = () => {
  const [seeAbout, setSeeAbout] = useState<boolean>(false);
  const { shopInfo, setShopInfo } = useContext(PublicDataContext);

  return (
    <>
      <HomeSectionTitle
        title="Sobre Nós"
        subtitle="Conheça mais a nossa loja"
        sectionEditMode={seeAbout}
        setSectionEditMode={setSeeAbout}
      />
      <div className={`${css.wrapperAbout} ${seeAbout && css.homeEditMode}`}>
        {shopInfo.aboutText.map((paragraph, index: number) => (
          <div className={`${css.wrapperP}`} key={index}>
            <p key={index} className={`${css.p}`}>
              {paragraph}
            </p>
          </div>
        ))}
        {seeAbout && (
          <About
            shopInfo={shopInfo}
            setShopInfo={setShopInfo}
            setSeeAbout={setSeeAbout}
          />
        )}
      </div>
    </>
  );
};

export default AboutSection;
